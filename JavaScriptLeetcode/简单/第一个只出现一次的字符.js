// 第一个只出现一次的字符
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    let map = new Map()
    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    for (let [key, value] of map.entries()) {
        if (value == 1) {
            return key
        }
    }
    return ' '
};
var s = ''
console.log(firstUniqChar(s))