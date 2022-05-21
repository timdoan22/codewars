// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1, 000

// 1990 should, "MCMXC": expected 'MDCCCCLXXXX' to equal 'MCMXC'

// 3746 expected 'MMMDCCXXXXVI' to equal 'MMMDCCXLVI'

function solution(number) {
    let remainder = number;
    let romanNumeral = "";
    while (remainder > 0) {
        console.log(remainder)
        console.log(romanNumeral)
        if (remainder >= 1000) {
            remainder -= 1000;
            romanNumeral += "M";
        } else if (remainder >= 900) {
            remainder -= 900;
            romanNumeral += "CM";
        } else if (remainder >= 500) {
            remainder -= 500;
            romanNumeral += "D";
        } else if (remainder >= 400) {
            remainder -= 400;
            romanNumeral += "CD";
        } else if (remainder >= 100) {
            remainder -= 100;
            romanNumeral += "C";
        } else if (remainder >= 90) {
            remainder -= 90;
            romanNumeral += "XC";
        } else if (remainder >= 50) {
            remainder -= 50;
            romanNumeral += "L";
        } else if (remainder >= 40) {
            remainder -= 40;
            romanNumeral += "XL";
        } else if (remainder >= 10) {
            remainder -= 10;
            romanNumeral += "X";
        } else if (remainder === 9) {
            remainder -= 9;
            romanNumeral += "IX";
        } else if (remainder === 8) {
            remainder -= 8;
            romanNumeral += "VIII";
        } else if (remainder === 7) {
            remainder -= 7;
            romanNumeral += "VII";
        } else if (remainder === 6) {
            remainder -= 6;
            romanNumeral += "VI";
        } else if (remainder === 5) {
            remainder -= 5;
            romanNumeral += "V";
        } else if (remainder === 4) {
            remainder -= 4;
            romanNumeral += "IV";
        } else {
            remainder -= 1;
            romanNumeral += "I";
        }
    }
    return console.log(romanNumeral)
}