import { MATRIX_SIZE_ERROR } from '../errors';

/**
 * Creates a zero matrix
 * @param vectorDim: number
 * @param matDim: number
 * @returns number[][]
 */
export function zeroMatrix(vectorDim: number, matDim: number): number[][] {
    const zeroMat: number[][] = [];
    for (let i = 0; i < matDim ; i += 1) {
        zeroMat.push([]);
        for (let j = 0 ; j < vectorDim ; j += 1) {
            zeroMat[i].push(0);

        }
    }
    return zeroMat;
}

/**
 * Generate random vector
 * @param dim: number
 * @returns number[]
 */
export function randomVector(dim: number) {
    const vector = [];
    for (let i = 0; i < dim ; i += 1) {
        vector.push(Math.random());
    }
    return vector;
}

/**
 * Generates random matrix
 * @param matDim: number
 * @param vecDim: number
 * @return matrix: number[][]
 */
export function randomMatrix(matDim:number, vecDim: number) {
    const matrix = [];
    for (let i = 0; i < matDim; i += 1) {
        matrix.push(randomVector(vecDim));
    }
    return matrix;
}

/**
 * Sum values inside a matrix into one value
 * @param mats: number[][]
 * @returns number
 */
export function sumMatrix(mats: number[][]):number {
    const sum = (acc:number, val:number) => { return acc + val; };
    return mats.map(mat => mat.reduce(sum)).reduce(sum);

}

/**
 * Matrice transposition
 * @param matrix:number[][]
 * @returns number[][]
 */
export function transpose(matrix: number[][]):number[][] {
    if (matrix[0].length === 0 || matrix.length === 0) {
        return [];
    }

    const transpose:number[][] = [];
    for (let i = 0, len = matrix[0].length; i < len; i += 1) {
        transpose[i] = [];
        matrix.forEach((val: number[], j:number) => {
            transpose[i][j] = matrix[j][i];
        });
    }
    return transpose;
}

/**
 * Multiplies matrices
 * @param matrix1:number[][]
 * @param matrix2:number[][]
 * @returns number[][]
 */
export function multiplyMatrices(matrix1: number[][], matrix2:number[][]): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < matrix1.length; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < matrix2[0].length; j += 1) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k += 1) {
                sum +=  matrix1[i][k] * matrix2[k][j];
            }
            matrix[i][j] = sum;
        }
    }
    return matrix;
}

/**
 * Infinity norm of a matrix
 * @param matrix
 * @returns number
 */
export function infinityNorm(matrix: number[][]):number {
    const sums = matrix.map((vec:number[], i:number) => {
        return vec.reduce((acc:number, val:number) => acc + val);
    });

    return sums.reduce((acc: number, val: number) => {
        return val > acc ? val : acc;
    });
}

/**
 * matrix subtraction
 * @param mat1: number[][]
 * @param mat2: number[][]
 * @returns number[][]
 */
export function subMatrix(mat1: number[][], mat2:number[][]):number[][] {
    const mat = mat1.map((vec:number[], index:number) => {
        const vectorSub = [];
        for (let i = 0, len = vec.length; i < len; i += 1) {
            vectorSub.push(vec[i] - mat2[index][i]);
        }
        return vectorSub;
    });
    return mat;
}

/**
 * Calculates the inverse of a matrix
 * @param matrix: number[][]
 * @returns matrix^(-1): number[][]
 */
export function inverseMatrix(matrix: number[][]):number[][] {
    const s = [matrix.length, matrix[0].length];
    const abs = Math.abs;
    const m = s[0];
    const n = s[1];
    const a = matrix;
    let ai;
    let aj;
    const id = identityMat(m);
    let idI;
    let idJ;
    let i;
    let j;
    let k;
    let x;
    for (j = 0; j < n; j += 1) {
        let i0 = -1;
        let v0 = -1;
        for (i = j; i !== m; i += 1) {
            k = abs(a[i][j]);
            if (k > v0) {
                i0 = i;
                v0 = k;
            }
        }
        aj = a[i0];
        a[i0] = a[j];
        a[j] = aj;
        idJ = id[i0];
        id[i0] = id[j];
        id[j] = idJ;
        x = aj[j];
        for (k = j; k !== n; k += 1) {
            aj[k] /= x;
        }
        for (k = n - 1; k !== -1; k -= 1) {
            idJ[k] /= x;
        }
        for (i = m - 1; i !== -1; i -= 1) {
            if (i !== j) {
                ai = a[i];
                idI = id[i];
                x = ai[j];
                for (k = j + 1; k !== n; k += 1) {
                    ai[k] -= aj[k] * x;
                }
                for (k = n - 1; k > 0; k -= 1) {
                    idI[k] -= idJ[k] * x;
                    k -= 1;
                    idI[k] -= idJ[k] * x;
                }
                if (k === 0) idI[0] -= idJ[0] * x;
            }
        }
    }
    return id;

}

/**
 * Identity matrix
 * @param dim:number
 * @returns id: number[][]
 */
export function identityMat(dim:number): number[][] {
    const id:number[][] = [];
    for (let i = 0; i < dim; i += 1) {
        id.push([]);
        for (let j = 0; j < dim; j += 1) {
            i === j ? id[i][j] = 1 : id[i][j] = 0;
        }
    }
    return id;
}

/**
 * Get the determinant of a matrix
 * @param matrix: number[][]
 * @returns number
 */
export function matrixDeterminant(matrix:number[][]):number {
    if (matrix[0].length !== matrix.length) {
        MATRIX_SIZE_ERROR;
    }
    const n = matrix[0].length;
    let ret = 1;
    let i;
    let j;
    let k;
    const a = matrix;
    let aj;
    let ai;
    let alpha;
    let temp;
    let k1;
    for (j = 0; j < n - 1; j += 1) {
        k = j;
        for (i = j + 1; i < n; i += 1) {
            if (Math.abs(a[i][j]) > Math.abs(a[k][j])) {
                k = i;
            }
        }

        if (k !== j) {
            temp = a[k]; a[k] = a[j]; a[j] = temp;
            ret *= -1;
        }
        aj = a[j];
        for (i = j + 1; i < n; i += 1) {
            ai = a[i];
            alpha = ai[j] / aj[j];
            for (k = j + 1; k < n - 1; k += 2) {
                k1 = k + 1;
                ai[k] -= aj[k] * alpha;
                ai[k1] -= aj[k1] * alpha;
            }
            if (k !== n) {
                ai[k] -= aj[k] * alpha;
            }
        }
        if (aj[j] === 0) {
            return 0;
        }
        ret *= aj[j];
    }
    return ret * a[j][j];
}
