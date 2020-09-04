import { IClusterModel } from '../types';

/**
 * Probability density function
 * @param cluster: IClusterModel
 * @param point: number[]
 * @return number
 */
export function density(cluster: IClusterModel, point:number[]): number {
    const delta = point.map((coord: number, index; number)=> coord - cluster.mu[index]);

    return;
}

/**
 * Probability of a point
 * @param cluster: IClusterModel
 * @param point: number[]
 * @return number, Probability numerator.
 * It needs to be divided by the sum of all probabilities to be used
 */
export function probability(cluster: IClusterModel, point: number[]): number {
    return cluster.pi * density(cluster, point);
}
