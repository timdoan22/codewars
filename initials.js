// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// Parameters: Takes in 2 strings as an argument, no numbers or special characters allow
// Result: The output should be two capital letters with a dot separating them.
// Example: Sam Harris => S.H
// Pseudocode: 
// 1) Split the string into an array using the split(' ') method
// 2) Declare a variable for the initials to be returned
// 3) Take the first array element and store it in the initials variable and make it uppercase using the .toUpperCase() method
// 4) Use the indexOf() method to find out the index element of the space separating the name
// 5) Add an additional +1 to the array of letters to get the second initial and make it using the .toUpperCase() method
// 6) Return the initials back



function abbrevName(name){
    let initials = ''
    let nameArr = name.split(' ')

    initials += `${nameArr[0].toUpperCase()}.`
    initials += nameArr[nameArr.indexOf(' ') + 1].toUpperCase()

    return initials
}


console.log(abbrevName('sam harris'))