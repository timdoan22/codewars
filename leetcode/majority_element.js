// Given an array nums of size n, return the majority element.
// Parameters: accepts an array of integers as input
// Return: it should return the majority element in the array
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Pseudeocode:
// 1) create an empty elem object, a count variable equal to 0 and a marElement set to
// the first index of the array
// 2) loop through the array and increment the number by 1 if it already exists the hash map
// otherwise, set the value to 1
// 3) loop through the hash map object and check each property's value to see if it's greater than
// the current count value.  If it is, set the count value to the property value and the majElem
// variable to the property value.
// 4) return the majElem value. 

function majority(arr){
    let elem = {},
        count = 0,
        majElem = arr[0]

    for(num of arr){
        if (elem[num]){
            elem[num]++
        } else {
            elem[num] = 1
        }
    }

    for(num in elem){
        if(elem[num] > count){
            count = elem[num]
            majElem = num
        } 
    }
    return majElem
}

console.log(majority([2,2,1,1,1,2,2]))