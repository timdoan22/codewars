// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers 
// then you should return 0.

// Parameters: Accepts an array of numbers (positive or negative integers and floats) only.
// Result: It should return the sum of the array
// Example: 
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Pseudocode:
// Return 0 if the array is null or empty,
// otherwise use the reduce method to return the sum of the array


function sum (numbers) {
    if (numbers === null || numbers.length === 0) {
        return 0
    } else {
        return numbers.reduce((previousValue, currentValue) => 
            previousValue + currentValue, 0
        );
    }
};

console.log(sum([1, 5.2, 4, 0, -1]))