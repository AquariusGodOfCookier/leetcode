// 重复的子字符串

// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。
// 给定的字符串只含有小写英文字母，并且长度不超过10000。

/**
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function(s) {
//     return /^(\w+)\1+$/.test(s)
// };
var repeatedSubstringPattern = function(s) {                                                                                                                      
    return (s+s).slice(1,(s+s).length-1).includes(s)
};
var s = 'aba'; 
console.log(repeatedSubstringPattern(s))