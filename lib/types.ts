/**
 * Gaussian distribution params
 */
export interface IClusterModel{
 /**
     * Mean | centroid
     */
    mu:number[];

    /**
     * Standard deviation | Covariance matrix
     */
    sigma: number[][];

    /**
     * Dimension
     */
    vectorSpaceDim: number;

    /**
     * weight | mixing probability
     */
    pi: number;

    /**
     * distribution label
     */
    label?: string;

    /**
     * Gammas | probability of z given x
     */
    gamma?: number[];

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

export interface IEmOptions{
    /**
     * Threshold
     */
    epsilon?:number;

    /**
     * Maximum iteration
     */
    maxEpochs?: number;
}
