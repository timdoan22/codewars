// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// Parameters: It should take in an array of strings.  No numbers or special characters allowed.
// Return: It should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, 
// Example: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Pseudocode:
// 1) Use the indexOf method and pass in the argument "needle" to locate its index
// 2) Return the string literal of "found the needle at position ${needlePosition}"

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }

  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))