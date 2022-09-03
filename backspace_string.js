// Assume "#" is like a backspace in string. 

// Parameters: accepts a string and the '#' symbole as a value.
// Result: it should return a string but with the deleted string in place of the '#' symbol.
// Example:
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
// Pseudocode:
// 1) declare an empty array variable to store the return string
// 2) convert the string parameter as an array using the .split('') method
// 3) iterate over the transformed array and check to see if each string
// is the '#' symbol; if it is, use the .pop() method to delete the last
// element in the return array from step 1
// otherwise, add the string to the return array using the .push() method
// 4) return the variable in step 1 back as a string using the .join('') method

function cleanString(s) {
    let returnStr = []

    s.split('').forEach(letter => {
        letter === '#' ? returnStr.pop() : returnStr.push(letter)
    })

    return returnStr.join('')
  }

  console.log(cleanString('abc#d##c'))