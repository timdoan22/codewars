// Given a string of characters as input, write a function that returns it with the characters reversed.
// Parameters: accepts a string as input
// Example: If you have a string like aba, then the result should be {'a': 2, 'b': 1}
// Pseudocode:
// 1) create object to keep track of letter count
// 2) iterate through each letter in the string
// 3) if the letter already exists in the object in step 1 then add +1 to
// the value; else set the value to just 1
// 4) return the object

// function countChars (string) {  
//     if (string === null) {
//         return {}
//     }

//     let returnStr = {}
    
//     string.split('').forEach(char => {
//         if(returnStr.hasOwnProperty(char)) {
//             returnStr[char] += 1
//         } else {
//             returnStr[char] = 1
//         }
//     })

//     return returnStr
//   }

function countChars(str){
    //create obj
    let countObj = {}
    //loop -> check val exist ? val++ : val-1
    for(const c of str){
        if( countObj[c] ){
            countObj[c]++
        }else{
            countObj[c] = 1
        }
    }
    return countObj
}



// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//         count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
// }

  console.log(countChars('hello world'))