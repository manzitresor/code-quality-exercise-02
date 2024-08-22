function calculateAverage(numbers) {
    const SUM = numbers.reduce((previousNumber,currentNumber) => previousNumber + currentNumber);
    const AVERAGE = SUM / numbers.length;
    return AVERAGE;
  }