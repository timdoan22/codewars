// Given a string of words (x), you need to return an array of the words, 
// sorted alphabetically by the final character in each.

// Parameter: accepts a string of two words or more as an input
// Result: it should return the string back but in alphabetical order based on the last character
// Example:
// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 
// Pseudocode:
// 1) split the string into an array separated by individual words using the .split(' ') method
// 2) use the sort() method and use the .charCodeAt() method targetting the character from the end
// using .length -1 and return the results

// function last(x){
//     let arr = x.split(" ")

//     return arr.sort((first, second) => {
//         if(first[first.length - 1] > second[second.length - 1]) {
//             return 1
//         } else if (first[first.length - 1] == second[second.length - 1] && arr.indexOf(first) > arr.indexOf(second)) {
//             return 0
//         } else {
//             return -1
//         }
//     })
// }

function last(x) {
    return 
    x.split(' ')
    .sort((a, b) => 
    a.charCodeAt(a.length - 1) - 
    b.charCodeAt(b.length - 1));
}


console.log(last('man i need a taxi up to ubud'))
// console.log(last('leonnoel'))