// Given a string of text, return the number of vowels found within the text
// Parameters: it should accept a string as an input
// Return: it should return the integer count of the total vowels in the string
// Example:
// vowelsCounter('anehizxcv') // will return 3
// Pseudocode:
// 1) store all the vowels inside an array
// 2) set the counter at 0
// 3) loop through each character in the string in all lowercase
// 4) check if each character contains a vowel using the .includes() method
// 5) return the total vowel count


function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0

    for (letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter
}

console.log(vowelsCounter('anehizxcv'))