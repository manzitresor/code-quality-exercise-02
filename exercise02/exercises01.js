function calculateAverage(numbers) {
    const sum = numbers.reduce((previousNumber,currentNumber) => previousNumber + currentNumber);
    const count = numbers.length;
    return sum / count
  }