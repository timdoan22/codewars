// It's pretty straightforward. Your goal is to create a function that removes the first and last 
// characters of a string. You're given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.

// Parameters: Takes in a string input that is longer than 2 characters.  No special characters or numbers are allowed
// Result: It should return the original string except with the first and last characters removed
// Example: 
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// assert.strictEqual(removeChar('place'), 'lac');
// assert.strictEqual(removeChar('ooopsss'), 'oopss');
// Pseudocode: 
// 1) split the word into an array of individual letters
// 2) select and remove the first character in the array
// 3) select and remove the last character in the array
// 4) join the word in the array and return the result



function removeChar(str){
    let splitStr = str.split("")
    delete splitStr[0]
    splitStr.pop()
    let returnStr = splitStr.join("")
    return returnStr
};

console.log(removeChar('eloquent'))