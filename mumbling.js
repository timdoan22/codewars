// This time no story, no theory. The examples below 
// show you how to write function accum:

// Parameter: only accepts a string.
// Result: it should return the string as a A-Bb-Ccc format
// Example:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Pseudocode: 
// 1) declare the returnStr variable as "" and a strCount variable as 0
// 2) loop through each individual letter in string
// 3) capitalize the first element of the string using .toUpperCase() method and
// store in the returnStr variable
// 4) if the strCount is 0 add a '-' to the returnStr
// 5) if the strCount is > 0, add the same remaining letter to the returnStr
// in all lowercase and add a '-' to the end.
// 6) add a +1 to the strCount variable
// 7) return the returnStr but delete the last string since it contains 
// an extra hyphen at the end that it is not needed.



function accum(s) {
	let returnStr = ""
    let strCount = 0

    for (i=0; i < s.length; i++) {
        returnStr += `${s[i].toUpperCase()}`
        if (strCount === 0) {
            returnStr += '-'
        }
        else {
            returnStr += `${s[i].repeat(strCount).toLowerCase()}-`
        }
        strCount++
    }
    return returnStr.slice(0, -1)
}

console.log(accum("RqaEzty"))