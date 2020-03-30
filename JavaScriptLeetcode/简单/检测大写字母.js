// 给定一个单词，你需要判断单词的大写使用是否正确。

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。
// 检测大写字母
/**
 * @param {string} word
 * @return {boolean}
 */
// var detectCapitalUse = function (word) {
//     // 先判断首位是不是大写字母，如果是，看接下来是不是全为大写字母或者全为小写字母
//     if (word.length <= 1) {
//         return true;
//     }
//     if (word[0] >= 'A' && word[0] <= 'Z') {
//         if (word[1] >= 'A' && word[1] <= 'Z') {
//             for (let i = 1; i < word.length; i++) {
//                 if (!(word[i] >= 'A' && word[i] <= 'Z')) {
//                     return false;
//                 }
//             }
//         } else if (word[1] >= 'a' && word[1] <= 'z') {
//             for (let i = 1; i < word.length; i++) {
//                 if (!(word[i] >= 'a' && word[i] <= 'z')) {
//                     return false;
//                 }
//             }
//         }
//     } else {
//         for (let i = 1; i < word.length; i++) {
//             if (!(word[i] >= 'a' && word[i] <= 'z')) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // 正则表达式
    return /^[A-Z]*$/.test(word)|| /^[A-Z][a-z]*$/.test(word)||/^[a-z]*$/.test(word)
};

var word = "USa";
console.log(detectCapitalUse(word));