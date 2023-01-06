// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

// Parameter: accepts an array of integer
// Return: it should return true if there are any duplicate integers in the array;
// false if there are no duplicates in the array
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Pseudocode:
// 1) create an empty object
// 2) iterate through the array of integers
// 3) if the number exists in the hash map, return true
// 4) if the number doesn't exist, create the property in the hash map and set it to true
// 5) return false if there are no duplicates in the hash map

function containsDupes(arr){
    let charObj = {}

    for(num of arr){
        if (charObj[num]){
            return true
        } else {
            charObj[num] = true
        }
    }
    return false
}

console.log(containsDupes([1,2,3,4]))