// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// Parameters: accepts an a positive or negative integer as an input
// Result: it should return true if the number is a palindrome; false if not
// Example: For example, 121 is a palindrome while 123 is not.
// Pseudocode:
// 1) create a new string array by using the Array.from(String) method
// 2) reverse the string array and use the join() method to transform the array
// into one string
// 3) covert the string back into a number using the Number() method and
// compare it with the original input
// 4) if both comparisons matches, return true; return false otherwise


var isPalindrome = function(x) {
    let reverseArr = Array.from(String(x)).reverse().join('')
    if(Number(reverseArr) === x) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(-121))