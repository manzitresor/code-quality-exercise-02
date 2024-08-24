function romanEncoder (number) {
    const romanNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";
    for (let i = 0; i < romanNumbers.length; i++) {
        const count = Math.floor(number / romanNumbers[i]);
        result += romanNumerals[i].repeat(count);
        number -= romanNumbers[i] * count;
    }

    return result; 
}