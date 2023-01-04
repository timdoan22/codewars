// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. Each character in stones is a type 
// of stone you have. You want to know how many of the stones you have are also jewels.

// Parameters: 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.
// Return: it should return the number of times the jewels exists in stones
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Pseudocode:
// 1) create an object to keep track of the characters in jewels
// 2) create a count variable
// 3) iterate through each jewel and map the value as true to the object created in step 1 
// 4) iterate through each stone to see if the stone exists in the hash map; if it does
// increase the count variable in step 2 by +1
// 5) return the count



function findJewels(jewels, stones){

    let objChars = {}
    let count = 0

    for(const jewel of jewels){
        objChars[jewel] = true
    }

    for(const stone of stones){
        if (objChars[stone]) {
            count++
        } 
    }

    return count
}

console.log(findJewels("aA", "aAAbbbb"))