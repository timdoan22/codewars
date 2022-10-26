//Given an array/list of integers, find the Nth smallest element in the array.

// Parameters: accepts an array of integers with at least 3 numbers (positive or negative) as the 
// first argument and a positive integer as the position element as the second argument
// Result: it should return the target element in the array based on the position element passed in
// Example:
// console.log(nthSmallest([3,1,2], 2), '2')
// console.log(nthSmallest([15,20,7,10,4,3], 3), '7')
// console.log(nthSmallest([-5,-1,-6,-18], 4), '-1')
// Pseudocode: 
// 1) use the sort() with the callbacks of a, b to rearrange the array from smallest to largest 
// using the a-b for return 
// return the array element value and use the '[]' to pass in the position input - 1 since
// the array starts from 0

function nthSmallest(arr, pos){
    return arr.sort((a, b) => a - b)[pos-1]
}


console.log(nthSmallest([3,1,2], 2), '2')
console.log(nthSmallest([15,20,7,10,4,3], 3), '7')
console.log(nthSmallest([-5,-1,-6,-18], 4), '-1')