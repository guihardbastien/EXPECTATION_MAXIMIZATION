
import * as Dummy from '../lib';
import * as Chai from 'chai';

const should = Chai.should();

describe('Library#index', () => {
    it('should return squared number', () => {
        const sqr = Dummy.dummy(4);
        sqr.should.equal(16);
    });
});
