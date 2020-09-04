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
 * Fixme for later FP porting
 */
export interface IExpmaxState{
    /**
     * Dataset
     */
    readonly dataset: IDataset;

    /**
     * Number of clusters we want
     */
    readonly clusterQt: number;

    /**
     * Vector space dimension
     */
    readonly vectorSpaceDim: number;

    /**
     * Clusters
     */
    readonly clusters?: IClusterModel[];

    /**
     * Threshold
     */
    readonly epsilon?:number;

    /**
     * Maximum iteration
     */
    readonly maxEpochs?: number;
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
