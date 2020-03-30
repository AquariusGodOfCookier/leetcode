// 罗马数字转整数
/**
 * @param {string} s
 * @return {number}
 */

var map = {
    'I': 1,
    'Q': 4,
    'W': 9,
    'V': 5,
    'X': 10,
    'E': 40,
    'L': 50,
    'R': 90,
    'C': 100,
    'T': 400,
    'D': 500,
    'Y': 900,
    'M': 1000

}
var romanToInt = function (s) {
    s = s.replace('CM', 'Y').replace('CD', 'T').replace('XC', 'R').replace('XL', 'E').replace('IX', 'W').replace('IV', 'Q');
    s = s.split('');
    let total = 0;
    s.forEach(element => {
        total += map[element];
    });
    return total;

}
var LM = function (str) {
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    var number = 0;
    for (i = 0; i < str.length-1; i++) {
        if (obj[str[i + 1]] <= obj[str[i]]) {
            number += obj[str[i]];
        } else if (obj[str[i + 1]] - obj[str[i]] == 4 || 9 || 40 || 90 || 400 || 900) {
            number += obj[str[i + 1]] - obj[str[i]];
            i=i+1;
        } 
    }
    return obj[str[str.length-1]]>obj[str[str.length-2]] ? number:number+obj[str[str.length-1]]

}
var s = 'IVII';
console.log(romanToInt(s))
console.log(LM(s));