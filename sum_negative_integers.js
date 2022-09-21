// Given an array of integers.

// Return an array, where the first element is the count of positives 
// numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// Parameters: Array should contain only integer numbers (positive or negative), no numbers or symbols allowed.
// Result: 
// If the input is an empty array or is null, return an empty array, otherwise
// return an array with the total indexes/count of only positive integers
// and the sum of all negative integers
// Example: 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
// Pseudocode:
// 1) declare a variable for the positive integer count and a variable for the running total 
// for negative integers.  
// 2) If the input is empty or null, return []
// 3) Loop through the array and check to see if each element is a positive or negative integer
// 4) If the element is a positive integer, add +1 to the count of positive integers
// 5) If the element is a negative integer, add the negative integer to the total count of all
// negative integers
// 6) Return the array of positive integer count and the sum of all negative integers


function countPositivesSumNegatives(input) {
    let postive_int_count = 0;
    let sum_negative_ints = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        for (i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                postive_int_count += 1
            } else if (input[i] < 0) {
                sum_negative_ints += input[i]
            }
        }
    }
    return [postive_int_count , sum_negative_ints];
}


  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))