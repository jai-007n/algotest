const reversed = require('../reverseString/index');

function pallindrome(str) {

    const reversedString = reversed(str)
    console.log(reversedString,str,reversedString === str)
    return reversedString === str
}

module.exports = pallindrome;
