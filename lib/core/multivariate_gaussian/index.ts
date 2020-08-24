import { IGaussianParams } from '../types';
import { IGaussianParams } from '../../types';

/**
 * Multivariate gaussian distribution
 */
export default class MultivariateGaussian {

    /**
     * Sigma
     */
    private _sigma:number;

    /**
     * Mean
     */
    private _mu:number;

    /**
     * mixing probability
     */
    pi: number;

    /**
     * gamma
     */
    gamma: number;

    /**
     * totals
     */
    totals: number[];

    /**
     * Distribution name
     */
    private _label: string;

    constructor(parameters: IGaussianParams) {
        const {
                mu,
                sigma,
            } = parameters;
        this._mu = mu;
        this._sigma = sigma;
    }

    /**
     * Update parameters
     * ! Mutates state !
     */
    update(parameters: IGaussianParams) {
        return;
    }

    /**
     * Get probability of a given point
     */
    probability(point: number[]) {
        return this;
    }

    /**
     * Get info
     */
    info() {
        return this;
    }

}
