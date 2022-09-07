// Complete the square sum function so that it squares each number passed into it and then 
// sums the results together.

// Parameters: the function should accept an array with integers.  No numbers or special characters allowed.
// Results: it should return the sum of all the numbers squared in the array
// Example: 
// for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// Pseudocode:
// Declare a variable to keep track of the sum
// Loop through the array of numbers
// For each number in the array, square the result and add it to the sum variable
// Return the sum


// function squareSum(numbers){
//     let sum = 0
//     numbers.forEach(number => {
//         sum += number ** 2
//     })
//     return sum
//   }

//   console.log(squareSum([1, 2, 2]))

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}
  