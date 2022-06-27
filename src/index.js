module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ' hundred';
    const space = ' ';
    let result = '';
    let numString = number.toString();
    // value 0
    if (number === 0) {
        return 'zero';
    }
    //the case of 10, 11, 12 ,13, .... 19 
    if (number < 20) {
        result = ones[number];
        return result;
    }
    // 20 - 99
    if (numString.length === 2) {
        result += tens[parseInt(numString.charAt(0))];
        if (numString[1] !== '0') {
            result += space + ones[parseInt(numString.charAt(1))];
        }
        return result;
    }
    //100 and more
    if (numString.length === 3) {
        result = ones[parseInt(numString.charAt(0))] + hundred;
        if (numString[1] === '0' && numString[2] === '0') {
            return result;
        } else if (numString[1] === '0') {
            result += space + ones[parseInt(numString.charAt(2))];
        } else if (numString[1] === '1') {
            result += space + ones[parseInt(numString.charAt(1) + parseInt(numString.charAt(2)))];
        } else if (numString[2] === '0') {
            result += space + tens[parseInt(numString.charAt(1))];
        } else {
            result += space + tens[parseInt(numString.charAt(1))];
            result += space + ones[parseInt(numString.charAt(2))];
        }
        return result;
    }
}
