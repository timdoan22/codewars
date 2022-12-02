// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
// Additionally, if the number is negative, return 0 (for languages that do have them).

// Parameter: accepts an integer value as input
// Return: it should return the sum of values below the number passed in if the values are divisible by 3 or 5
// Example: 10 should return 23 since 3, 5, 6 and 9 meets the condition
// Pseudocode:
// 1) check to see if the number is less than 0, if so, return 0
// 2) if the number is 0 or greater, transform the number into an array of range from 0 to the number passed in, minus 1
// 3) use the reduce() method to sum the values in the array if the value are either divisible by 3 or 5

function solution(number){
    // [...Array(5).keys()];
    // [0, 1, 2, 3, 4]

    // fibArr.reduce((acc, curr) => { if (curr % 2 != 0) acc += curr; return acc; }, 0); 

    return number < 0 ? 0 : [...Array(number).keys()]
    .reduce((acc, curr) => {if (curr % 5 === 0 || curr % 3 === 0) acc += curr; return acc}, 0 )
}

// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
// }

// function solution(number){
//     return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
// }

console.log(solution(10))