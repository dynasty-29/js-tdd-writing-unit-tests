export function pointsForWord(word) {
    const vowels = "aeiou";
    let points = 0;
  
    // Convert word to lowercase to handle case insensitivity
    const lowercaseWord = word.toLowerCase();
  
    for (const char of lowercaseWord) {
      if (vowels.includes(char)) {
        points += 1; // Vowel: 1 point
      } else if (/[a-z]/.test(char)) {
        points += 2; // Consonant: 2 points
      }
    }
  
    return points;
  }
  