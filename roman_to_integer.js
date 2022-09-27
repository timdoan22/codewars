// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Parameter: accepts roman numeral strings only.
// Result: it should return the integer value of the roman numeral string passed
// in as the parameter
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// Pseudocode:
// 1) map the roman numeral strings and its integer value
// 2) set the result variable = 0
// 3) iterate through the roman numeral string from left to right
// 4) comparing the two roman numerals at a time, if the first value
// is > the second value, add the values together and store it in the
// running value of the result
// if the first value is < the second value, subtract the two values and
// store the value in the result
// 5) move two characters to the right each time to compare until it reaches the end
// 6) return the result


// var romanToInt = function(s) {

//     const sym = { 
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }

//     let result = 0;

//     for (i=0; i < s.length; i++){
//         const current = sym[s[i]];
//         const next = sym[s[i+1]];

//         if (current < next){
//             result += next - current
//             i++
//         } else {
//             result += current
//         }
//     }

//     return result; 
// };

// console.log(romanToInt('XVIV'))