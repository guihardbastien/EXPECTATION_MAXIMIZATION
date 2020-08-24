/**
 * Length error
 */
export class MatrixSizeError extends Error {}
export const MATRIX_SIZE_ERROR = new MatrixSizeError('Wrong data matrix size');
