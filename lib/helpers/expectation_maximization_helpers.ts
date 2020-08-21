import { IGaussianParams } from '../types';
import MultivariateGaussian from '../core/multivariate_gaussian';
import { initGaussian } from './multivariate_gaussian_helpers';

/**
 * Maximization function
 */
export function maximization() {
    return;
}

/**
 * estimation function
 */
export function expectation() {
    return;
}

/**
 * Cluster instanciation
 */
export function instanciateClusters(clusterQt: number, k: number): MultivariateGaussian[] {
    const gmm: MultivariateGaussian[] = [];
    for (let i = 0, i < clusterQt ; i += 1) {
        const params = initGaussian(k);
        gmm.push(new MultivariateGaussian(params));
    }
    return gmm;
}
