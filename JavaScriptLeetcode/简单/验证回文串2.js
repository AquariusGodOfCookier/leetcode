// 验证回文串2
// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, count = 0) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] === s[j]) continue;
        if (count > 0) return false;
        // 用递归就方便多了，还可以很好的使用到可删除多个字符的情况
        return validPalindrome(s.slice(i, j), count + 1) || validPalindrome(s.slice(i + 1, j + 1), count + 1);
    }
    return true;
};
var s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
console.log(validPalindrome(s));