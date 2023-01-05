// Given a string of characters, return the character that appears the most often.
// Paramters: accepts a string as input
// Return: it should return the character in the string that appears the most often
// Example: "Hello World" => "l"

// Pseudocode:
// 1) create the charMap object, count and maxChar variables
// 2) iterate through the characters in the string and map each character in the
// charMap object as +1 if it occurs more than once or set it to 1 if it occurs just once
// 3) iterate through each character in the charMap object and check if each
// letter is greater than the count.  If it is, set the count to the character 
// value and set the maxChar to the chracter
// 4) return the maxChar variable


function maxCharacter(str){
    let charMap = {},
        count = 0,
        maxChar = null
    
    for (const char of str) {
        charMap[char] = charMap[char] +1 || 1
    }

    for (const char in charMap){
        if (charMap[char] > count) {
            count = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxCharacter('hello world'))