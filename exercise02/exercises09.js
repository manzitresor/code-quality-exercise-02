function calculateMatrixSum(matrix) {
  const flatternMatrix = matrix.flat();
  return flatternMatrix.reduce((accumulator, current) => accumulator + current, 0)
}