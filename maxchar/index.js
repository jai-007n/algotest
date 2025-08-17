// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let chars = {}
    let maxChar = ''
    let maxCount = 0;
    let maxMultiple = []
    let multipleChar = false

    for (let char of str) {
        if (!chars[char]) {
            chars[char] = 1
        } else {
            chars[char]++;
        }
    }
    
    for (let obj in chars) {
        if (chars[obj] > maxCount) {
            maxChar = obj
            maxCount = chars[obj]
            maxMultiple.push(obj)
        } else if (chars[obj] == maxCount) {
            maxMultiple.push(obj)
            multipleChar=true
        }
    }
    
    return multipleChar ?  maxMultiple :maxChar
    

}

module.exports = maxChar;
