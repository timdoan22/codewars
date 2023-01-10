// Given a magazine of words and a ransom note, determine if it’s possible to 
// “cut out” and create the ransom note from the magazine words.

// Parameters: accepts two arguments as input - a paragraph of string in the magazine
// and a second string to see if the words are in the magazine
// Return: it should return true or false if the second string argument exists within the magazine string
// Example:
// describe("Ransom Note", () => {
//  it("Should return true", () => {
//     assert.equal(ransomNote("sit ad est sint", magazine), true);
//    });
  
//   it("Should return false", () => {
//     assert.equal(ransomNote("sit ad est love", magazine), false);
//    });
  
//   it("Should return true", () => {
//     assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//    });
  
//   it("Should return false", () => {
//     assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//    });
// });

// Pseudocode:
// 1) create an empty hash map for the magazine words
// 2) iterate through each word in the magazine and map it to the hash map
// 3) iterate through each word in the string argument
// 4) check if the word exists in the hash map; if it does, decrement the count of
// the word by 1 in the hash map and return false if the count < 0
// 5) return true if the count is > 0

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

function ransomNote(str, magazine) {
    let objWords = {}

    for (const word of magazine.toLowerCase().split(" ").sort()) {
        objWords[word] = objWords[word] + 1 || 1
    }
    
    for (const word of str.toLowerCase().split(" ")) {
        if(objWords[word]){
            objWords[word]--
        } else {
            return false
        }
    }
    return true
}

console.log(ransomNote("sit ad est sint in in in in", magazine))