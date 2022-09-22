
// An anagram is the result of rearranging the letters of a word to produce a new word

// Parameters: accepts two string parameters
// Result: Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Example: 
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
// Pseudocode:
// 1) Store the two strings into a variable and manipulate it into an all lowercase string, 
// split it into an array of individual letters by using the split('') method, sort the letters
// alphabetically using the sort() method and then finally put it back into one string by using
// the join('') method to compare both of the strings
// 2) If the two strings' length is not the same, return false
// 3) Else if the two strings match, return true
// 4) Else return false


var isAnagram = function(test, original) {
    let str1 = test.toLowerCase().split('').sort().join('')
    let str2 = original.toLowerCase().split('').sort().join('')

    if(test.length !== original.length){
       return false
    } else if (str1 === str2) {
        return true
    } else {
        return false
    }
 }

 isAnagram('foefet', 'toffee')