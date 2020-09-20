import * as MathUtils from '../lib/utils/math';
import * as Chai from 'chai';

const should = Chai.should();

describe('MathUtils#zeroMatrix', () => {
    it('should generate a 2x4 zero matrix', () => {
        const twoByFour = MathUtils.zeroMatrix(4, 2);
        twoByFour.length.should.equal(2);
        twoByFour[0].length.should.equal(4);
        twoByFour[0][1].should.equal(0);
    });
    it('should return empty matrix when asking for a 0x4 matrix', () => {
        const zeroByFour = MathUtils.zeroMatrix(4, 0);
        zeroByFour.length.should.equal(0);
    });
    it('should return matrix of empty arrays when asking for a 4x0 matrix', () => {
        const fourByZero = MathUtils.zeroMatrix(0, 4);
        fourByZero.length.should.equal(4);
        fourByZero[0].length.should.equal(0);
    });
});
describe('MathUtils#randomVector', () => {
    it('should generate a random vector', () => {
        const vec = MathUtils.randomVector(8);
        vec.length.should.equal(8);
    });
    it('should generate an empty vector if dim is zero', () => {
        const vec = MathUtils.randomVector(0);
        vec.length.should.equal(0);
    });
    it('should generate an empty vector if dim is negative', () => {
        const vec = MathUtils.randomVector(-4);
        vec.length.should.equal(0);
    });
});
describe('MathUtils#randomMatrix', () => {
    it('should generate a random matrix', () => {
        const mat = MathUtils.randomMatrix(3, 3);
        mat.length.should.equal(3);
        mat[0].length.should.equal(3);
    });
});
describe('MathUtils#sumMatrix', () => {
    it('should sum every value of a matrix', () => {
        const sum = MathUtils.sumMatrix([[1,1],[1,1]]);
        sum.should.equal(4);
    });    
    it('should handle empty matrices', () => {
        const sum = MathUtils.sumMatrix([[0],[0]]);
        sum.should.equal(0);
    });
});
describe('MathUtils#transpose', () => {
    it('should transpose matrix', () => {
        const t: number[][] = MathUtils.transpose([[1,2],[3,4]]);
        t.should.eql([ [ 1, 3 ], [ 2, 4 ] ]);
    });
    it('should return empty array', () => {
        const t: number[][] = MathUtils.transpose([[],[3,4]]);
        t.should.eql([]);
    });
});
describe('MathUtils#multiplyMatrices', () => {
    it('should multiply two matrices', () => {
        const mat = [[1,2],[3,4]];
        const multiplyMats = MathUtils.multiplyMatrices(mat, mat);
        multiplyMats.should.eql([[7,10],[15,22]]);
    });
});

