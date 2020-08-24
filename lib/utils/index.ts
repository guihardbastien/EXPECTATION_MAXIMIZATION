import { MatrixSizeError } from '../errors';

/**
 * Generates random float.
 * @param min
 * @param max
 */
export function randomFloat(min:number, max:number) {
    return Math.random() * (Math.floor(max) - Math.ceil(min)) + min;
}

/**
 * Generates random integer in a given interval with max excluded.
 * @param min
 * @param max
 */
export function randomInt(min:number, max:number) {
    return Math.floor(Math.random() * ((Math.floor(max) - 1) - Math.ceil(min))) + min;
}

/**
 * Return random vector
 */
export function randomVector(dim: number) {
    const vector = [];
    for (let i = 0, i < dim ; i += 1) {
        vector.push(Math.random());

    }
    return vector;
}

/**
 * returns random matrix
 */
export function randomMatrix(matDim:number, vecDim: number) {
    const matrix = [];
    for (let i = 0, i < matDim; i += 1) {
        matrix.push(randomVector(vecDim));

    }
    return matrix;
}

/**
 * return zero matrix
 */
export function zeroMatrix(matDim: number, vecDim:number[]) {
    const matrix = [];
    for (let i = 0;  i < matDim ; i += 1) {
        const zeroVec = [];
        for (let j = 0, j< vecDim; i += 1) {
            zeroVec.push(0);
        }
        matrix.push(zeroVec);

    }
    return matrix;
}

/**
 * Checks matrix size
 */
export function checkMatrix(matrix: number[][]) {
    matrix.forEach((data:number[]) => {
        if (data.length !== matrix[0].length) {
            throw MatrixSizeError();
        }
    });
    return matrix;
}


/**
 * Sum vectors in matrix
 */
export function sumMatrix(matrix: number[][]){
    matrix.reduce((acc:number[], vec: number[]) =>{
        return vec.map((num:number, i:number) => {
        return num + acc[i];
        } )
    } )

}
