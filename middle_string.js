
// You are going to be given a word. Your job is to return the middle character of 
// the word. If the word's length is odd, return the middle character. If the word's 
// length is even, return the middle 2 characters.

// Parameter: only accepts a string as an input.
// Result: it should return the middle character(s) of the string
// Example: 
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// Pseudocode:
// 1) set the strLength variable as the string length
// 2) set the middleStr variable as the middle index of the string using
// Math.floor to round up the string length when divided by 2
// 3) check to see if the string length is even or odd by % 2 === 0;
// if it is even, return the string element position of middle - 1 + the middle index element;
// if it is odd, return only the middle index element of the string


function getMiddle(s){
    let strLength = s.length
    let middleStr = Math.floor(s.length/2)
    
    if (strLength % 2 === 0) {
      return s[middleStr - 1] + s[middleStr]
    } else {
      return s[middleStr]
    }
  }