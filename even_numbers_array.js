// In this Kata, you will be given an array of numbers in which two numbers 
// occur once and the rest occur only twice. Your task will be to return the 
// sum of the numbers that occur only once. 

// Parameters: accepts two arguments - an array of integers and an integer number as
// the second argument
// Result: it should return an array with the target number that are even integers
// in descending order in the array based on the target number
// Example:
// [1, 2, 3, 4, 5, 6, 7, 8, 9], 3) should return [4, 6, 8])
// Pseudocode:
// 1) use the filter method to get only the even numbers
// 2) return the new array using the slice method to target the
// array based on the descending order of the target number

function evenNumbers(array, number) {
    let newArr = array.filter(num => num % 2 === 0)
    return newArr.slice(-number)
  }

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])