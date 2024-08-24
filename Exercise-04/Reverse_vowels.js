function reverseVowels(string) {
    const result = string.split("");
    const vowels = "aeiouAEIOU";
    const vowelArr = result.filter(character => vowels.includes(character));
    
     for (let i = 0; i < result.length; i++) {
      if (vowels.includes(result[i])) {
        result[i] = vowelArr.pop(); 
      }
    }
  
    return result.join("");
  }