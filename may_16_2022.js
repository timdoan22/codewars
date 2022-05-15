Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd
argument(also a string).

    Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false



function solution(str, ending) {
    const splitStr = str.split('');
    const splitEnd = ending.split('');
    const strLength = splitStr.length;
    const endLength = splitEnd.length;
    let compareStr = strLength - endLength;
    let compare = true;
    for (i = 0; i < endLength; i++) {
        if (splitEnd[i] === splitStr[compareStr]) {
            compare = true
        } else {
            compare = false;
            break;
        }
        compareStr++
    }
    if (compare === true) {
        return true
    } else {
        return false
    }
}
