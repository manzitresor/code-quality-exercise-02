function romanDecoder (roman) {
    let total = 0;
    let prevValue = 0; 
     const romanValues = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentValue = romanValues[roman[i]];
      
      if (currentValue < prevValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
        prevValue = currentValue;
      }
    
      return total;
  }