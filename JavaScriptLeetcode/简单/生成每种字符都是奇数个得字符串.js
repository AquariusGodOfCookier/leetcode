// 给你一个整数 n，请你返回一个含 n 个字符的字符串，
// 其中每种字符在该字符串中都恰好出现 奇数次 。

// 返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，
// 则返回其中任意一个即可。

// 生成每种字符都是奇数个得字符串
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return n%2==0?''.padEnd(n-1,'a')+'b':''.padEnd(n,'a')
};
var n = 6;
console.log(generateTheString(n));