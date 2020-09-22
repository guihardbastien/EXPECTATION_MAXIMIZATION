import { IClusterModel, IDataset, IEmOptions } from '../types';
import { probability } from './gaussian_mixture_core';
import {
    randomVector,
    randomMatrix,
    transpose,
    infinityNorm,
    subMatrix,
    zeroMatrix} from '../utils/math';

/**
 * Maximization step
 * Updates estimates of params
 * @param clusters: IClusterModel[]
 * @param data: IDataset
 * @returns IClusterModel[]
 */
export function maximization(clusters: IClusterModel[], data: IDataset):IClusterModel[] {
    const n = data.points.length;
    const updatedClusters = clusters.map((cluster: IClusterModel, clusterIndex: number) => {
        const { vectorSpaceDim, label, gamma } = cluster;
        const sumGammas = gamma.reduce((acc: number, val:number) => acc + val);
        const pi = sumGammas / n;

        const coeff = transpose(data.points)
            .map((arr: number[]) => arr.map((val: number) => val / sumGammas));
        const mu = coeff
            .map((arr:number[]) => arr
                .reduce((acc:number, val:number, index:number) => (val * gamma[index]) + acc));

        const sigma: number[][] = zeroMatrix(vectorSpaceDim, vectorSpaceDim);
        data.points.forEach((point: number[], j:number) => {
            const diff: number[] = point.map((val:number, k:number) => val - mu[k]);
            const  coeff = gamma[j] / sumGammas;
            for (let a = 0; a < diff.length; a += 1) {
                for (let b = 0; b <= a; b += 1) {
                    const tmp = coeff * diff[a] * diff[b];
                    sigma[a][b] += tmp;
                    if (b !== a) sigma[b][a] += tmp;
                }
            }
        });
        const newCluster: IClusterModel = { pi, mu, sigma, vectorSpaceDim, label, gamma };
        return newCluster;
    });
    return updatedClusters;
}

/**
 * Expectation step
 * Assigns points to its most likely cluster
 * @param clusters: IClusterModel[]
 * @param data: IDataset
 * @returns IClusterModel[]
 */
export function expectation(clusters: IClusterModel[], data: IDataset): IClusterModel[] {
    const gammaZnk = data.points.map((point: number[], index: number) => {
        let denominator = 0;
        const numerators = clusters.map((cluster:IClusterModel, j:number) => {
            const prob = probability(cluster, point);
            denominator += prob;
            return prob;
        });
        const gamma: number[] = [];
        //if (denominator > 0) {
            numerators.forEach((n:any, i:number) => {
                gamma[i] = n / denominator;
            });
        //} else {
        //    numerators.forEach((n:any, i:number) => {
        //        gamma[i] = 1 / clusters.length;
        //    });
        //}
        return gamma;
    });
    const updatedClusters = clusters.map((c: IClusterModel, index:number) => {
        const { mu, sigma, vectorSpaceDim, pi } = c;
        const gamma = gammaZnk.map((g:number[]) => g[index]);
        const newCluster: IClusterModel = { mu, sigma, vectorSpaceDim, pi, gamma };
        return newCluster;
    });
    return updatedClusters;
}

/**
 * Creates random cluster
 * @param qt: number cluster quantity
 * @param dim: number vector space dimension
 * @return IClusterModel[]
 */
export function createRandomClusters(data:IDataset, qt: number, dim: number): IClusterModel[] {
    const clusters: IClusterModel[] = [];
    for (let i = 0; i < qt ; i += 1) {
        const gamma = randomVector(data.points.length);
        const mu = randomVector(dim);
        const sigma = randomMatrix(dim, dim);
        const pi = 1 / qt;
        const vectorSpaceDim = dim;
        clusters.push({ mu, sigma, pi, vectorSpaceDim, gamma });
    }
    return clusters;
}

/**
 * Training model
 * @param maxEpoch:number
 * @param clusters: IClusterModel
 * @param data : IDataset
 * @param threshold: number
 * @returns
 */
export function train(clusters: IClusterModel[], data: IDataset, opts:IEmOptions): IClusterModel[] {
    const { threshold, maxEpochs } = opts;
    let tempClusters:IClusterModel[] = clusters;
    for (let i = 0;  i < maxEpochs ; i += 1) {
        const maximizedClusters = maximization(tempClusters, data);
        const expectations = expectation(maximizedClusters, data);
        const oldGammas = tempClusters.map(cluster => cluster.gamma);
        const newGammas = expectations.map(cluster => cluster.gamma);
        tempClusters = expectations;
        const delta = infinityNorm(subMatrix(newGammas, oldGammas));
        if (delta <= threshold) {
            break;
        }

    }
    return tempClusters;
}
