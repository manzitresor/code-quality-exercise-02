function calculateAverage(numbers) {
    const sum = numbers.reduce((previousNumber, currentNumber) => previousNumber + currentNumber);
    return sum / numbers.length
  }