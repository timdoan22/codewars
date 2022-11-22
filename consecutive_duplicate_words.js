// Your task is to remove all consecutive duplicate words from a string, 
// leaving only first words entries. 

// Parameters: it should accept a string as an input separated but a comma for each word.
// the words can be repeated consecutively or not and repeated more than once.
// Return: it should return a new string but showing only first word entries
// Example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" should return:
// --> "alpha beta gamma delta alpha beta gamma delta" 

// Pseudocode:
// 1) split the string into an array of words separated by a comma
// 2) use/chain the filter method and pass in the element, index and array as parameters
// if the element does not equal the value of the next element, then include it
// 3) chain the .join(" ") method to return it back as a string separated by spaces

const removeConsecutiveDuplicates = string =>
    string
        .split(" ")
        .filter(
            (word, index, splittedString) => word !== splittedString[index + 1],
        )
        .join(" ");