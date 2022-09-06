// You get an array of numbers, return the sum of all of the positives ones.

// Note: if there is nothing to sum, the sum is default to 0.


// Parameters: An array of positive or negative integers only.  No strings or special characters allowed.
// Return: After passing in the array, the function should return the sum of the array, 
// only if the numbers in the array is greater than 0.
// Example: [1,-4,7,12] => 1 + 7 + 12 = 20
// Pseudocode: 
// Set the sum variable to 0
// Loop through each number in the array
// Check to see if the number is greater than 0
// If the number is a positive integer, add it in the running total in the sum variable
// Return the sum variable

function positiveSum(arr) {
  let sum = 0
  for (num of arr) {
    if (num > 0) {
        sum += num
    }
  }
  return sum
}

console.log(positiveSum([1,-4,7,12]))