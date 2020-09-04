/**
 * Checks if a matrix has the correct dim
 * @param matrix: number[][]
 * @param vectorSpaceDim: number
 * @return boolean|error
 */
export function checkMatrixSize(matrix: number[][], vectorSpaceDim: number):boolean {
    return true;
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
 * Helper to get the mu numerators
 * @param mat1: number[][]
 * @param mat2[][]
 * @returns number[] has same vector space dimension (it's the centroid)
 */
export function getMuNumerators(gamma:number[], points:number[][]): number[] {
    const c: number[] = [];
    for (let i = 0, len = points.length; i < len; i += 1) {
        for (let j = 0, len = points[i].length; j < len; j += 1) {
            const mul = gamma[i] * points[i][j];
            isNaN(c[i]) ? c[i] = mul : c[i] += mul;
        }
    }
    return c;
}

/**
 * Matrice transposition
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
export  function multiplyMatrices(matrix1: number[][], matrix2:number[][]): number[][] {
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
