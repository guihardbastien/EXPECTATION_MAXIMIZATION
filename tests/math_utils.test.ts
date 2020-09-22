import * as MathUtils from '../lib/utils/math';
import * as Chai from 'chai';
import {MATRIX_SIZE_ERROR} from '../lib/errors';

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
    it('should not multiply matrices that cannot be multiplied', () => {
        const mat = [[1,2],[3,4]];
        const mat2 = [[1,2,3],[4,5,6]];
        const multiplyMats = MathUtils.multiplyMatrices(mat, mat2);
        multiplyMats.should.eql([]);
    });
});
describe('MathUtils#infinityNorm', () => {
    it('should find infinty norm of a matrix', () => {
        const mat = [[1,2],[3,4]];
        const normInf = MathUtils.infinityNorm(mat);
        normInf.should.eql(7);
    });
});
describe('MathUtils#subMatrix', () => {
    it('should subtract two matrices', () => {
        const mat = [[1,2],[3,4]];
        const sub = MathUtils.subMatrix(mat, mat);
        sub.should.eql([[0,0],[0,0]]);
    });
    it('should not substract matrices with different size', () => {
        const mat = [[1,2],[3,4]];
        const mat2 = [[1,2,3],[4,5,6]];
        const sub = MathUtils.subMatrix(mat, mat2);
        sub.should.eql([]);
    });   
});
describe('MathUtils#inverseMatrix', () => {
    it('should return correct matrix inverse', () => {
        const mat = [[4,7],[2,6]];
        const matInv = MathUtils.inverseMatrix(mat);
        matInv.should.eql([
            [ 0.6000000000000001, -0.7000000000000001 ], 
            [ -0.2, 0.4 ] 
        ]);
    }); 
});
describe('MathUtils#identityMatrix', () => {
    it('should return correct identity matrix', () => {
        const matId = MathUtils.identityMat(3);
        matId.should.eql([
            [ 1, 0, 0 ], 
            [ 0, 1, 0 ], 
            [ 0, 0, 1 ] 
        ]);
    }); 
});
describe('MathUtils#matrixDeterminant', () => {
    it('should return correct determinant', () => {
        const matrix = [[1,2,3,15],
                        [3,4,8,4],
                        [8,5,6,12],
                        [48,7,6,2]];
        const det = MathUtils.matrixDeterminant(matrix);
        det.should.eql(5689.999999999999);
    });
    it('should throw when matrix isn\'t square', () => {
        const matrix = [[1],[3]];
        ( () => {
            const det = MathUtils.matrixDeterminant(matrix);
        }).should.throw(MATRIX_SIZE_ERROR);
    }); 
    it('should return zero when vectors are on same line', () => {
        const matrix = [[1,2],[1,2]];
        const det = MathUtils.matrixDeterminant(matrix);
        det.should.eql(0);
    });
});
