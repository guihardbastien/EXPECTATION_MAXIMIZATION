/**
 * Parameters for gaussian distribution
 */
export interface IGaussianParams{
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
     * distribution name
     */
    label?: string;

    /**
     * gamma
     */
    gamma?: number[];

    /**
     * total
     */
    totals?: number[];
}

/**
 * Interface describing a dataset
 */
export interface IDataset{

    /**
     * Points
     */
    points: number[][];

    /**
     * label
     */
    label?: string;
}

/**
 * Em options
 */
export interface IEmOptions{
    /**
     * epsilon threshold
     */
    epsilon?:number;

    /**
     * max epochs
     */
    maxEpochs?:number;

}
