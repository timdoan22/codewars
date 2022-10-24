// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// Parameters: accepts two arguments as input, the first is an array of numbers
// and the second is the target number
// Result: it should return the index of the two elements in the array that
// adds up to the target number
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Pseudocode:
// 1) Loop through the outer array to get the first comparison
// 2) Loop throught he inner array to get the second comparison
// 3) If the both the loop adds up to the target number then
// return the index of the two elements

var twoSum = function(nums, target) {
    for (i=0; i < nums.length; i++) {
        for (j=i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};
