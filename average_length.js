// Given an array of strings of the same letter type. Return a new array, which will differ in that 
// the length of each element is equal to the average length of the elements of the previous array.

// Parameters: accepts an array of string elements as an input, the string can only be
// a single letter but it can be repeated more than once
// Return: it should return a new array with the transformed elements that is the average
// number of total letters in the array
// Example:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

// Pseudocode: 
// 1) find the average by using the Math.round method
// and then use join method to combine all the elements in the array into one single string value
// and use the length method to determine how many letters there are
// divide with the total number of elements in the array
// 2) return the new array using the map method but transform only the first letter of each
// element and use the repeat method and pass in the average length to get the average for
// each element

function averageLength(arr) { 
    let average = Math.round(arr.join('').length / arr.length)
    return arr.map(char => char[0].repeat(average))
}



console.log(averageLength(['aa', 'bb', 'ddd', 'eee']))
//['u', 'y'] =>  ['u', 'y'] // average length is 1
//['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
//['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3