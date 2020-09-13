import { IClusterModel } from '../types';
import { inverseMatrix, matrixDeterminant } from '../utils/math';

/**
 * Probability density function
 * @param cluster: IClusterModel
 * @param point: number[]
 * @return number
 */
export function density(cluster: IClusterModel, point:number[]): number {
    const delta = point.map((coord: number, index: number) => {
        return coord - cluster.mu[index];
    });
    const invSigma = inverseMatrix(cluster.sigma);

    const determinant = Math.abs(matrixDeterminant(cluster.sigma));
    const leftPart = 1 / (Math.pow(Math.sqrt(2 * Math.PI), point.length) * Math.sqrt(determinant));
    let rightPart =  0;
    for (let i = 0; i < cluster.vectorSpaceDim ; i += 1) {
        let sum = 0;
        for (let j = 0; j < cluster.vectorSpaceDim; j += 1) {
            sum += invSigma[i][j] * delta[j];
        }
        rightPart += delta[i] * sum;
    }
    const density = leftPart * Math.exp(rightPart / -2);
    return density;
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
