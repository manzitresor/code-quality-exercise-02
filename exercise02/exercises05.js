function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
  return factorial;
}