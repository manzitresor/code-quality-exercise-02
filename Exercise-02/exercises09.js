function calculateMatrixSum(input) {
  const flatMatrix = input.flat();
  
  return flatMatrix.reduce((accumulator, current) => accumulator + current, 0)
}