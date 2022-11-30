// Remove all consecutive duplicate letters from each string in the array.
// Parameters: accepts an array of words as input
// Return: it should return back an array of the modified words with consecutive duplicate letters in each
// word removed
// Example: ["abracadabra","allottee","assessee"] => ["abracadabra","alote","asese"]
// Pseudocode:
// 1) Use the map method to return a new array
// 2) For each word, chain the split('') method to split the word into an array composed of each letter in the
// word
// 3) Chain the filter() method to filter out any consecutive duplicate letters that are repeating
// 4) Chain the .join('') method back to transform the array back into a word


function dup(s) {
    return s.map(word => (
        word.split('')
        .filter((letter, index, wordArr) => 
            letter != wordArr[index + 1]
        )
        .join('')
    ))
};


// function dup(s) {
//     let splitArr = s.join(' ').split('')
//     return splitArr.filter((letter, index) =>(
//         letter != splitArr[index + 1]
//     )).join('').split(' ')
// };

console.log(dup(["abracadabra","allottee","assessee"]))

//["abracadabra","alote","asese"]