function calculateSum(numbers) {
    if(numbers.length === 0) return 0;
    return numbers[0] + calculateSum(numbers.slice(1))
}