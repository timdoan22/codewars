// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function that 
// determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Parameters: accepts only a string.
// Result: if there are repeating letters of any kind, it should return false
// otherwise, it should return true if there are no repeating letters.
// Example: (Input --> Output)

// "Dermatoglyphics" --> true 
// "aba" --> false 
// "moOse" --> false (ignore letter case)

// Pseudocode:
// 1) create an empty array to store each of the checked letter
// 2) use the .toLowerCase() and .split("") methods to transform
// the same string into an array of lowecase strings, separated by each individual letter
// 3) loop through the transformed array 
// 4) check each letter to see if the letter already exists in the array created
// in step 1 by using the .includes() method
// 5) if the letter exists in the array, return false
// 6) if the letter doesn't exist, add the letter to the array in step 1
// return true if there are no repeating letters after the end of the loop 



function isIsogram(str){
    let stringCheck = []

    for (letter of str.toLowerCase().split("")) {
        if (stringCheck.includes(letter)) {
            return false
        } else {
            stringCheck.push(letter)
        }
    }
    return true
  }

console.log(isIsogram('Dermatoglyphics'))


