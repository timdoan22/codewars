// Given a sentence containing two or more words, 
// return the equivalent of the sentence when capitalised.

// Parameters: it should accept a string as an input
// Return: it should return the string with each word capitalized
// Example:
// capSentence('the tales of scotch!') should return 'The Tales Of Scotch!' 
// Pseudocode:
// 1) convert the string parameter into all lowercase and split each word into
// an array of individual words
// 2) use the map() method to create a new array with the first letter
// of each word capitalized and join it back with the remaining characters
// using the slice() method at index 1
// 3) return the mapped array and use the .join(' ') method to
// transform it back as a string



function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
}



console.log(capSentence('the tales of scotch!'))