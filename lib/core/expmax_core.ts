import {IClusterModel, IDataset} from "../types";

/**
 * Maximization step
 * Updates estimates of params
 * @param clusters: IClusterModel[]
 * @param data: IDataset
 * @returns IClusterModel[]
 */
export function maximization(clusters: IClusterModel[], data: IDataset):IClusterModel[] {
    return;
}

/**
 * Expectation step
 * Assigns points to its most likely cluster
 * @param clusters: IClusterModel[]
 * @param data: IDataset
 * @returns IClusterModel[]
 */
export function expectation(clusters: IClusterModel[], data: IDataset ): IClusterModel[]{
    return;
}

/**
 * Creates random cluster 
 * @param qt: number cluster quantity
 * @param dim: number vector space dimension
 * @return IClusterModel[]
 */
export function createRandomClusters(qt: number, dim: number): IClusterModel[]{
    return;
}


