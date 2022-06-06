// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings passed 
// in will consist of only letters and spaces. Spaces will be 
// included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns 
// "Hey wollef sroirraw" spinWords( "This is a test") => returns 
// "This is a test" spinWords( "This is another test" )=> returns 
// "This is rehtona test"

function spinWords(string){
    let sentence = ""
    const splitWords = string.split(" ")
    function checkWords(word) {
        if (word === "" || word === " ") {
        	return word
        } else if (word.length > 4) {
            let reverseWord = ""
            for (i = word.length - 1; i >= 0; i--) {
                reverseWord += word[i]
            }
            if (splitWords.length === 1 || splitWords.indexOf(word) === splitWords.length - 1) {
            	sentence += reverseWord
            } else {
            	sentence += reverseWord + " "
            }
        } else if (word === splitWords[splitWords.length - 1]) {
        		sentence += word
        } else {
          	sentence += word + " "
        }
    }
    splitWords.filter(checkWords)
    console.log(typeof sentence)
    return se

console.log(spinWords("Hey fellow warriors"))