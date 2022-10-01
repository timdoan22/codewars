// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item

// Parameters: accepts an array with names.
// Result: it should return a sentence depending on how many names are in the array that likes "this"
// Example: 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Pseudocode:
// 1) if the length of the array is equal to 0, return "no one likes this"
// 2) if the length of the array is equal to 1, use the string interpolation to return the name of the person that likes this
// 3) if the length of the array is equal to 2, use the string interpolation to return the names of the people that likes this
// 4) if the length of the array is equal to 3, use the string interpolation to return the names of the people that likes this
// 5) if the length of the array is greater than 3, use the names of the first two people and subtract the array.length by 2
// to get the remainder of the people in the list that likes this


function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }