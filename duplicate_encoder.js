// The goal of this exercise is to convert a string to a new string where each character in the 
// new string is "(" if that character appears only once in the original string, or ")" if that 
// character appears more than once in the original string. Ignore capitalization when determining 
// if a character is a duplicate.

// Parameters: Accepts a string as an input. Numbers and symbols are valid.
// Result: it should return a string replaced with the same number of characters as the original string.
// If the character only appears once, it should be replaced with '('
// If the character appears mroe than once, it should be replaced with ')'
// Example:
// console.log(duplicateEncode('din'), '(((')
// console.log(duplicateEncode('recede'), '()()()')
// console.log(duplicateEncode('Success'), ')())())')
// console.log(duplicateEncode('(( @'), '))((')

// Pseudocode:
// 1) return the word and apply the following methods
// 2) toLowerCase() to make sure the strings are all uniform
// 3) split() method to transform the string into an array separated by each individual character
// 4) map() method to return a new array and check each character
// 5) indexOf() method to check if the character in the array matches the lastIndexOf() method of
// the same character.
// 6) if the character has the same indexOf and lastIndexOf position in the element, return '('
// since it only occurs once.  If the indexOf and lastIndexOf are not the same, then return ')'
// since it occurs more than once
// 7) use the join('') method to transform the array back into a string 

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map((char, index, arr) => {
        return arr.indexOf(char) == arr.lastIndexOf(char) ? '(' : ')'
      })
      .join('');
  }

console.log(duplicateEncode('din'), '(((')
console.log(duplicateEncode('recede'), '()()()')
console.log(duplicateEncode('Success'), ')())())')
console.log(duplicateEncode('(( @'), '))((')

