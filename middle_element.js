// As a part of this Kata, you need to create a function that when provided with a triplet, 
// returns the index of the numerical element that lies between the other two elements.

// Parameter: accepts an array with 3 elements comprised of numbers (integers and floats)
// Return: it should return the index of the element that has the middle value (in between the high and low element)
// Example: 
// [5, 10, 14] => 1
// Pseudocode:
// 1) create a copy of the array passed in
// 2) use the sort method to get the numbers from lowest to highest
// 3) return the middle index value using the indexOf method and passing
// in the sorted array with the index value of 1 


function gimme (triplet) {
    let newArr = [...triplet].sort(function(a, b){return a-b})
    return triplet.indexOf(newArr[1])
}

console.log(gimme([5.9, 10.4, 14.2]))
// gimme([5, 10, 14]) => 1