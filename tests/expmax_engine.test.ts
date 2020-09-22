import * as Chai from 'chai';
import ExpMax from '../lib/engines/expmax';

const should = Chai.should();

const opts = {    
    'clusterQt':2, // Quantity of clusters you want to fit
    'maxEpochs':1000, // Maximum training cycles
    'threshold': 2e-16 // Threshold (epsilon) used to define convergence
}

const data = {
            points: [
                [1,2],
                [2,1],
                [7,8],
                [8,7],
            ]
        };

describe('expmax_engine#class', () => {
    it('should be an instance of ExpMax', () => {
        const expmax = new ExpMax(data, opts);
        expmax.should.be.an.instanceof(ExpMax);
    });
});
