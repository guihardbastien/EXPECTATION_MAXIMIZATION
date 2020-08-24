import { IGaussianParams, IDataset } from '../types';
import MultivariateGaussian from '../core/multivariate_gaussian';
import { initGaussian, pdf } from './multivariate_gaussian_helpers';
import { zeroMatrix } from '../utils';

/**
 * Maximization function
 * update estimates of parameters
 */
export function maximization(clusters: IGaussianParams[], dataset: IDataset) {
    const matSize = dataset.points.length();
    const vectorSpaceDim = dataset.points[0].length;
    clusters.forEach((cluster: IGaussianParams)=>{
        const newCovarianceMatrix = zeroMatrix(vectorSpaceDim, vectorSpaceDim);
        const n = cluster.gamma.reduce((acc:number, num:number) => acc + num);
        cluster.pi = n/matSize;
        //todo mu
    })
    return;
}

/**
 * Estimation function
 * Assign points to its most likely cluster
 */
export function expectation(clusters: IGaussianParams[], dataset: IDataset) {
    const totals = zeroMatrix(dataset.points.length, dataset.points[0].length);
    clusters.forEach((cluster: IGaussianParams) => {
        const gamma = cluster.pi * pdf(cluster); // fixme multiply matrix
        for (let i = 0, len = dataset.points.length; i < len; i += 1) {
            totals[i] += gamma[i];
        }
        cluster.gamma = gamma;
        cluster.totals = totals;
    });
    clusters.forEach((cluster) => {
        cluster.gamma.map((g:number, index:number) => {return g / cluster.totals[index]; });
    });
    return clusters;
}

/**
 * Cluster instanciation
 */
export function instanciateClusters(clusterQt: number, vectorSpaceDim: number): MultivariateGaussian[] {
    const clusters: IGaussianParams[] = [];
    for (let i = 0, i < clusterQt ; i += 1) {
        clusters.push(initGaussian(clusterQt, vectorSpaceDim));
    }
    return clusters;
}

/**
 * predicts output given a gmm
 */
export function predicts(model: any, point: number[]) {
    // need to check matrix size before doing anything
    return;
}
