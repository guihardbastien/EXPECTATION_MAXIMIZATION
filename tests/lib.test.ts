import * as Chai from 'chai';
import ExpMax from '../lib/engines/expmax';
import {IDataset, IEmOptions} from '../lib/types';

const should = Chai.should();

describe('Library#index', () => {
    it('should return squared number', () => {
        const dataset: IDataset = {
            'points': [
                [1.1,1],
                [1,2],
                [2,2],
                [2,1],
                [15,15],
                [15,16],
            ],
            'label':'test',
        };
        const opts: IEmOptions = {
            'clusterQt':2,
            'maxEpochs':1000,
            'threshold': 2e-16
        }
        const test = new ExpMax(dataset, opts);
        const chose = test.train()
        console.log(chose);
    });
});
