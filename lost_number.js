// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, 
// then the remaining numbers were mixed. ind the number that was deleted.

// Parameter: accepts two arrays of integers as an input
// Return: it should return the deleted number in the second array
// Example:
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// Pseudocode:
// 1) set the return number variable at 0
// 2) loop through the first array of numbers
// 3) check to see if each number exists in the second array
// using the includes() method
// 5) if the number doesn't exist in the second array,
// set the return number to equal to the number that is deleted
// 6) return the deleted number


function findDeletedNumber(arr, mixArr) {
    let returnNum = 0
    for (num of arr) {
        if (!mixArr.includes(num)) {
            returnNum = num
        }
    }
    return returnNum
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))