// You will be given an array of numbers. You have to sort the odd numbers 
// in ascending order while leaving the even numbers at their original positions.

// Parameters: accepts an array of integers value only
// Result: it should return an array with the odd values from lowest to highest
// but odd values should stay in tact (the same index as the original array)
// Example:
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Pseudocode:
// 1) create a new variable and use the filter() and sort () methods
// to check if the values in the original array are odd numbers 
// this array will only contain the odd values from highest to lowest
// 2) return the new array using the map method to determine if
// each element is odd or even
// if it's even then don't do anything to the element, if it's odd
// then use the pop() method on the variable of odd values
// since it will grab each value from the end (lowest values) and delete it,
// and insert it in the mapped array 


function sortArray(arr){
    //filter -> sort
    const oddNums = arr.filter(n => n % 2 !== 0).sort((a,b)=>b-a)

    // console.log(test)
    return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0] ))