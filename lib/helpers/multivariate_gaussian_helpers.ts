import { IGaussianParams } from '../types';

/**
 * Initializes a random multivariate gaussian distribution
 */
export function initGaussian(vectorSpaceDim: number): IGaussianParams[] {
    const mu = 0;
    const sigma = 0;
    const pi = 0;
    return { mu, sigma, pi, vectorSpaceDim };
}
