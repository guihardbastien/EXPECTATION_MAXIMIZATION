/**
 * Parameters for gaussian distribution
 */
export interface IGaussianParams{
    /**
     * Mean
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
     * weight
     */
    pi: number;

    /**
     * distribution name
     */
    label?: string;
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
