// 字母大小写全排列
// 给定一个字符串S，通过将字符串S中的每个字母转变大小写，
// 我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
/**
 * @param {string} S
 * @return {string[]}
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let result = [];
    backTrack('', 0,result,S);
    return result;
};
var backTrack = function (str, index, result, slist) {
    if (index >= slist.length) {
        result.push(str);
        return;
    }
    let current = slist[index];
    if (/[a-zA-Z]/.test(current)) {
        let lowerCase = str + current.toLowerCase();
        let upperCase = str + current.toUpperCase();
        backTrack(lowerCase, index + 1, result, slist);
        backTrack(upperCase, index + 1, result, slist);
    } else {
        backTrack(str + current, index + 1, result, slist);
    }
}
var S = "a1b2";
console.log(letterCasePermutation(S));