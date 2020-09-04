import { IClusterModel, IDataset } from '../types';
import { probability } from './gaussian_mixture_core';
import { randomVector, randomMatrix, sumMatrix, multiplyMatrices, transpose, getMuNumerators } from '../utils/math';

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
        const mu = getMuNumerators(gamma, data.points).map((val:number) => val / sumGammas);
        const sigma: number[][] = [];
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
        return{ pi, mu, sigma, vectorSpaceDim, label, gamma };
    });
    return updatedClusters;
}

/**
 * Expectation step
 * Assigns points to its most likely cluster
 * @param clusters: IClusterModel[]
 * @param data: IDataset
 * @returns number[][]
 */
export function expectation(clusters: IClusterModel[], data: IDataset): number[][] {
    const gammaZnk = data.points.map((point: number[], index: number) => {
        let denominator = 0;
        const numerators = clusters.map((cluster:IClusterModel, j:number) => {
            const prob = probability(cluster, point);
            denominator += prob;
            return prob;
        });
        const gamma: number[] = [];
        if (denominator > 0) {
            numerators.forEach((n:any, i:number) => {
                gamma[i] = n / denominator;
            });
        } else {
            numerators.forEach((n:any, i:number) => {
                gamma[i] = 1 / clusters.length;
            });
        }
        return gamma;
    });
    return gammaZnk;
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
 * @param
 * @param
 * @returns
 */
export function train(): IClusterModel[]{
}
