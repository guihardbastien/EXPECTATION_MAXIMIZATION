import { IClusterModel, IDataset } from '../types';
import { probability } from './gaussian_mixture_core';
import {randomVector, randomMatrix} from '../utils/math';

/**
 * Maximization step
 * Updates estimates of params
 * @param clusters: IClusterModel[]
 * @param data: IDataset
 * @returns IClusterModel[]
 */
export function maximization(clusters: IClusterModel[], data: IDataset):IClusterModel[] {
    return;
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
            const prob = probability(clusters[j], point);
            denominator += prob;
            return prob;
        });
        const gamma: number[] = [];
        if (denominator > 0) {
            numerators.forEach((n:number, i:number) => {
                gamma[i] = n / denominator;
            });
        } else {
            numerators.forEach((n:number, i:number) => {
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
export function createRandomClusters(qt: number, dim: number): IClusterModel[] {
    const clusters: IClusterModel[] = [];
    for (let i = 0; i < qt ; i+=1) {
        const mu = randomVector(dim);
        const sigma = randomMatrix(dim, dim);
        const pi = 1/qt;
        const vectorSpaceDim = dim;
        cluster.push({mu, sigma, pi, vectorSpaceDim});
    }
    return clusters;
}
