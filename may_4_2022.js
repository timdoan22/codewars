// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089



function isValidIP(str) {
    const octets = str.split("").filter(octet => octet === '.')
    if (octets.length === 3) {
  	    for (number of str.split('.')) {
            if ((number[0] === '0' && Number(number) != 0) || number.includes(" ") === true || number.includes('\n') === true || number[1] === 'e' || Number(number) < 0 || Number(number) > 255 || isNaN(parseFloat(number)) === true) {
                return false
            }
        }
    }
    else {
        return false
    }
    return true
}

