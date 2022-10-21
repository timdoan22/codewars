//Sum elements in the array that only occurs once

// Prep: only accepts an array of integers
// Return: it should return the sum of the elements that occurs only once in the array
// Example:
// [4,5,7,5,4,8] should return 15 since 7 and 8 only occurs once
// Pseudocode:
// 1) use the filter() method on the array to filter the array
// 2) use the indexOf() and lastIndexOf() method to check if each number
// filtered only occurs once
// 3) use the reduce() method to sum the elements in the array

function sumArr(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((acc, num) => acc + num, 0)
}

console.log(sumArr([4,5,7,5,4,8]), '15')