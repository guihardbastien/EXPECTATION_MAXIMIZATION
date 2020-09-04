import { IClusterModel, IDataset, IEmOptions } from '../types';
import * as MathUtils from '../utils/math';
import { MATRIX_SIZE_ERROR } from '../errors';
import { createRandomClusters, maximization } from '../core/expmax_core';

/**
 * Expectation maximization using a gaussian mixture model
 * This class only holds the internal state of the
 * optimized gaussian mixture model (GMM) used for each clustering model.
 *
 * For instance:
 *
 * ```ts
 * tba
 * ```
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
    private _clusters: IClusterModel[];

    /**
     * Data
     */
    private _dataset: IDataset;

    /**
     * Quantity of clusters
     */
    private _qt:number;

    /**
     * Max epochs
     */
    private _maxEpochs: number;

    /**
     * Threshold
     */
    private _threshold:number;

    /**
     * Vector space dimension
     */
    private _vectorSpaceDim: number;

    constructor(dataset: IDataset, options: IEmOptions) {
        const {
            threshold = 2e-16,
            maxEpochs = 1000,
            clusterQt = 2,
        } = options;

        this._maxEpochs = maxEpochs;
        this._threshold = threshold;
        this._dataset = dataset;
        this._qt = clusterQt;
        this._vectorSpaceDim = dataset.points[0].length;
        this._clusters = createRandomClusters(dataset, clusterQt, this._vectorSpaceDim);
    }

    /**
     * Update dataset
     * Mutates internal state
     * @param newDataset: IDataset
     * @returns IClusterModel[] | error
     */
    update(newDataset:IDataset) {
        if (MathUtils.checkMatrixSize(newDataset.points, this._dataset.points[0].length)) {
            this._dataset = newDataset;
            this.train();
            return this._clusters;
        }
        MATRIX_SIZE_ERROR;
    }

    /**
     * Em Algorithm
     * @returns IClusterModel[]
     */
    train(): IClusterModel[] {
        for (var i = 0, len = this._maxEpochs; i < len; i++) {
            const newClusters = maximization(this._clusters, this._dataset);
            const 
        }
        return;
    }

    /**
     * Classify point
     * @param point: number[]
     * @returns IClusterModel
     */
    classify(point: number[]):IClusterModel {
        return;
    }
}
