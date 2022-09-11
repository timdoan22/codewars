// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// Parameters: takes in an array of booleans (true, false, null and undefined).  No strings or numbers.
// Return: it should return the count of all true items only.
// Example: 
// An array of [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// should return 17
// Pseudocode:
// set the total variable count to 0
// loop through the array
// check to see if an item strictly equals to true
// if the item is true, add 1 to the total count
// return the total count



function countSheeps(arrayOfSheep) {
    let sheepCount = 0
    arrayOfSheep.forEach(sheep => {
        if (sheep === true) {
            sheepCount += 1
        }
    })
    return sheepCount
  }

  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))



// return arrayOfSheeps.filter(Boolean).length