
function reverse(n) {

    const reversedInteger = n.toString().split('').reverse().join('')

    return parseInt(reversedInteger)* Math.sign(n)

}

module.exports = reverse;
