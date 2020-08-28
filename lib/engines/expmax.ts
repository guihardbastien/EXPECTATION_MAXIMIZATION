import {IClusterModel, IDataset, IEmOptions} from "../types";

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

    constructor(dataset: IDataset, clusterQt: number = 2, options: IEmOptions) {
        const {
            threshold = 2e-16,
            maxEpochs = 1000,
        } = options;

        this._maxEpochs = maxEpochs;
        this._threshold = threshold;
        this._dataset = dataset;
        this._qt = clusterQt;
        this._clusters = instanciateClusters(clusterQt, dataset.points[0].length);
        this.train();
    }

    /**
     * update dataset
     * Careful: mutates state
     */
    update(newDataset:any) {
        this._dataset = newDataset;
        // TODO checkmatrix here
        this.train();
        return this._clusters;
    }

    /**
     * Training model
     */
    train() {
        for (let i = 0, i < this._maxEpochs ; i += 1) {
            const clusters = maximization() ;
            const;
        }
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
