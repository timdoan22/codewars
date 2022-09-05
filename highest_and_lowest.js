// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Parameters: any integer number entered in as a string, no letters, floating numbers or special characters allowed.
// Return: It should return the highest number and lowest number as one string, separated by a space
// Example:
// assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
// assert.strictEqual(highAndLow("1 2 3"), "3 1");
// Pseudocode: 
// 1) convert the string into an array
// 2) chain the Math.max.apply methods to covert the string array to find out the highest number as an int datatype
// 3) chain the Math.min.apply methods to covert the string array to find out the highest number as an int datatype
// 4) return the highest and lowest number as one string together separated by a space


function highAndLow(numbers){
    numArray = numbers.split(" ")
    highNum = Math.max.apply(null, numArray)
    lowNum = Math.min.apply(null, numArray)
    return highNum + " " + lowNum
}

  console.log(highAndLow("1 2 3 4 5"))
