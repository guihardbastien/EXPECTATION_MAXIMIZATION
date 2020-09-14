/**
 * Gaussian distribution params
 */
export interface IClusterModel{
 /**
     * Mean | centroid
     */
    readonly mu:number[];

    /**
     * Standard deviation | Covariance matrix
     */
    readonly sigma: number[][];

    /**
     * Dimension
     */
    readonly vectorSpaceDim: number;

    /**
     * weight | mixing probability
     */
    readonly pi: number;

    /**
     * distribution label
     */
    readonly label?: string;

    /**
     * Gammas | probability of z given x
     */
    readonly gamma: number[];

}

/**
 * Dataset types
 */
export interface IDataset{
    /**
     * Points
     */
    points: number[][];

    /**
     * Label
     */
    label?: string;

}

/**
 * Class options
 */
export interface IEmOptions{

    /**
     * Threshold
     */
    threshold: number;

    /**
     * Maximum iteration
     */
    maxEpochs: number;

    /**
     * Amount of clusters we want to create
     */
    clusterQt: number;
}
