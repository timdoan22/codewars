// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

// Parameters: it should take any string as an input, including numbers and symbols as a string
// Result: it should return the input string but repeated n number of times that the user entered in
// Example: 
// Test.assertSimilar(repeatStr(3, "*"), "***");
// Test.assertSimilar(repeatStr(5, "#"), "#####");
// Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
// Pseudocode: 
// 1) Take the s parameter and use the repeat method n number of times to get the final repeated string
// 2) Return the repeated string

function repeatStr (n, s) {
    let repeatedStr = s.repeat(n)
    return repeatedStr;
  }

  console.log(repeatStr(3, '*'))