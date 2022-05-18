// Your task is to sort a given string.Each word in the string will contain a single number.This number is the position the word should have in the result.

//     Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

// If the input string is empty, return an empty string.The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

// console.log((order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est"))
// console.log((order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople"))
// console.log((order(""), "", "empty input should return empty string"))


function order(words) {
    let splitWords = words.split(" ")
    console.log(splitWords)
    console.log(splitWords[2])

    let cutOut = splitWords.splice(0, 1); // cut the element at index 'from'
    splitWords.splice(3, 0, cutOut);            // insert it at index 'to'
    console.log(splitWords)

    for (word of splitWords) {
        let splitWord = word.split("")

        console.log(splitWord)
    }
}