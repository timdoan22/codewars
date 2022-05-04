// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'i', 'o', 'u', 'e']
    
    str.split("").forEach(letter => {
        vowels.includes(letter) ? vowelsCount++:""  
    })
    
    return vowelsCount;
  }