// 给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：

// 字符（'a' - 'i'）分别用（'1' - '9'）表示。
// 字符（'j' - 'z'）分别用（'10#' - '26#'）表示。

// 解码字母到整数映射
/**
 * @param {string} s
 * @return {string}
 */
// var freqAlphabets = function(s) {
//     let stack = [];
//     for(let i=0;i<s.length;i++){
//         if(s[i]=='#'){
//             let bitItem = stack.pop().charCodeAt()-96;
//             let tenItem = stack.pop().charCodeAt()-96;
//             let number = tenItem*10+bitItem;
//             stack.push(String.fromCharCode(parseInt(number)+96));
//         }else{
//             stack.push(String.fromCharCode(parseInt(s[i])+96));
//         }
//     }
//     return stack.join('')
// };
var freqAlphabets = function(s) {
    return s.replace(/(\d\d#|\d)/g,t=>t.length==3?String.fromCharCode(parseInt(t[0])*10+parseInt(t[1])+96):String.fromCharCode(parseInt(t)+96));
};

var s = '10#11#12';
console.log(freqAlphabets(s))