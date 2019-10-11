/**
 * @param {string} s
 * @return {number}
 */

 var s = 'MCMXCIV';
 var map = {
     'I':1,
     'Q':4,
     'W':9,
     'V':5,
     'X':10,
     'E':40,
     'L':50,
     'R':90,
     'C':100,
     'T':400,
     'D':500,
     'Y':900,
     'M':1000

 }
 var romanToInt = function(s){
    s = s.replace('CM','Y').replace('CD','T').replace('XC','R').replace('XL','E').replace('IX','W').replace('IV','Q');
    s = s.split('');
    let total = 0;
    s.forEach(element => {
        total += map[element];
    });
    return total;

 }
 console.log(romanToInt(s));