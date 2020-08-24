import { IGaussianParams } from '../types';
import { randomVector, randomInt, randomMatrix } from '../utils';

/**
 * Initializes a random multivariate gaussian distribution
 */
export function initGaussian(clusterQt: number, vectorSpaceDim: number): IGaussianParams[] {
    const mu = randomVector(vectorSpaceDim);
    const sigma = randomMatrix(vectorSpaceDim, vectorSpaceDim);
    const pi = 1 / clusterQt;
    return { mu, sigma, pi, vectorSpaceDim };
}

/**
 * Probability density function
 */
export function pdf(gaussian: IGaussianParams):number[][] {
    return;
}
