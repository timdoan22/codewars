// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

// Parameters: it should accept a string as an input
// Result: it should return the string but in reverse order and reverse capitalization
// Example: 
// "Example Input" ==> "iNPUT eXAMPLE"
// Pseudocode:
// 1) use the split(' ') method to split the string into an array of individual words
// 2) use the reverse() method to reverse the order of the string
// 3) use the join(' ') method to join the string back into a string
// 4) use the split('') method again to split the string into an array comprised of individual characters
// 5) assign a new variable using the map() method to iterate through the array of individual characters
// and use a ternary operator to check if each character is lowercase and if it is, change it to
// an uppercase using the toUpperCase() method, otherwise use the toLowerCase() method to transform it
// to a lowercase string
// 6) return the mapped variable and join the array back using the join('') method

function stringTransformer(str) {
    let splitStr = str.split(' ').reverse().join(' ').split('')
    let newMap = splitStr.map(char => 
        char === char.toLowerCase() ?
        char.toUpperCase() : char.toLowerCase()
    )
    return newMap.join('')
}

// function stringTransformer(str) {
//     return str
//         .split(' ')
//         .reverse()
//         .join(' ')
//         .split('')
//         .map(char => char == char.toUpperCase() ?
//         char.toLowerCase() :
//         char.toUpperCase())
//         .join('');
// }



// stringTransformer('Example Input')
console.log(stringTransformer('Example Input'))

//   "Example Input" ==> "iNPUT eXAMPLE"