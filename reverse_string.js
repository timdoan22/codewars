// Complete the solution so that it reverses the string passed into it. 

// Parameters: Only accepts string as input.  No numbers or special characters
// Result: After taking in a word, it should return the same string, except with reverse lettering
// Example: 'world'  =>  'dlrow', 'word'   =>  'drow'
// Pseudocode: 
// 1) split the word into an array of single characters
// 2) reverse the letters in the array
// 3) join all the elements in the array back into a string
// 4) return the reverse string

function solution(str){
  let splitStr = str.split("")
  let reverseStr = splitStr.reverse()
  let joinReverseStr = reverseStr.join("")
  return joinReverseStr
}

console.log(solution('word'))