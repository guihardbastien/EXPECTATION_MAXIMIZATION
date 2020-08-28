/**
 * Checks if a matrix has the correct dim
 * @param matrix: number[][]
 * @param vectorSpaceDim: number
 * @return boolean|error
 */
export function checkMatrixSize(matrix: number[][], vectorSpaceDim: number):boolean {
    return;
}

/**
 * Generate random vector
 * @param dim: number
 * @returns number[]
 */
export function randomVector(dim: number) {
    const vector = [];
    for (let i = 0, i < dim ; i += 1) {
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
    for (let i = 0, i < matDim; i += 1) {
        matrix.push(randomVector(vecDim));
    }
    return matrix;
}
