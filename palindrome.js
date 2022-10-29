// function isPalindrome(line) {
//     let backWardCheck = line.toLowerCase().split('').reverse().join('')
    // if (backWardCheck === line.toLowerCase()) {
    //   return true
    // } else {
    //   return false
    // }
//     return (backWardCheck === line.toLowerCase() ? true : false)
//   }
  
  // making the line str toLowerCase() is an edge case
  // ask if it should or not matter if we need to check against capitalization

//   console.log(isPalindrome('.!!.'))

const population = {
    male: 4,
    female: 93,
    others: 10,
  };
  
  // Iterate through the object
  for (const key in population) {
    if (population.hasOwnProperty(key)) {
      console.log(`${key}: ${population[key]}`);
    }
  }
  