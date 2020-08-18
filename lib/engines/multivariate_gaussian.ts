import { IGaussianParams } from '../types';

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

    constructor(parameters: IGaussianParams, init: boolean = false) {
        const {
                mu,
                sigma,
            } = parameters;
        this._mu = mu;
        this._sigma = sigma;
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
