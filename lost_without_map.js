// Given an array of integers, return a new array with each value doubled.

// Parameter: Accepts an array of integers as an argument for the function call. 
// No strings or symbols are valid
// Result: The return value of the items in the array should be doubled its original value.
// Example: [1, 2, 3] --> [2, 4, 6]
// Pseudocode: 
// Use the map method and double the value of each index value by multiplying it by 2
// Return the mapped value

function maps(x){
    return x.map(item => item * 2)
}

console.log(maps([1, 2, 3]))