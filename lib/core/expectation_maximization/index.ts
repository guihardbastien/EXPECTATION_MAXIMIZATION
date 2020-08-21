import * as EmUtils from '../utils/em_utils';
import MultivariateGaussian from './multivariate_gaussian';
import { IDataset } from '../../types';

/**
 * Expectation maximization using a gaussian mixture model
 * This class only holds the internal state of the
 * optimized gaussian mixture model (GMM) used for each clustering model.
 *
 * For instance:
 *
 * ```ts
 * const model = new ExpMax(data, qt, thrshold);
 * model.train;
 * const prediction = model.predict(dataPoint);
 * console.log(prediction);
 *```
 *
 * This program will output the likelihood of your data point belonging to each
 * distribution.
 *
 * Please mind that, in this class, the dataset is mutable for computation purpose.
 * Indeed, we don't want to fit a new, randomly generated GMM for
 * every slight change in our dataset.
 */
export default class ExpMax {

    /**
     * Clusters
     */
    private _clusters: MultivariateGaussian[];

    /**
     * Threshold before end of loop
     */
    private _threshold: number;

    /**
     * Data
     */
    private _dataset: IDataset;

    /**
     * Quantity of clusters
     */
    private _qt:number;

    /**
     * Debug mode
     */
    private _debug: boolean;

    constructor(dataset: IDataset, clusterQt: number = 2, threshold: number = 2e-16) {
        // TODO Load existing model
        // TODO Debug mode
        this._dataset = dataset;
        this._qt = clusterQt;
        this._debug = debug;
        this._threshold = threshold;
        this._clusters = instanciateClusters(clusterQt, dataset.points[0].length);
        this.train();
    }

    /**
     * update dataset
     * Careful: mutates state
     */
    update(newDataset:any) {
        this._dataset = newDataset;
        this.train();
        return this._clusters;
    }

    /**
     * Training model
     */
    train() {
        return this._clusters;
    }

    /**
     * Predicts output for a given point
     * @returns clusterInfo: {[key:string]:any}
     */
    predict(point: number[]) {
        const cluster;
        return cluster;
    }

}
