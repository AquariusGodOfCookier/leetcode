// 给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，
// 使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。

// 举个例子，A = "abcd"，B = "cdabcdab"。

// 答案为 3， 因为 A 重复叠加三遍后为 “abcdabcdabcd”，
// 此时 B 是其子串；A 重复叠加两遍后为"abcdabcd"，B 并不是其子串。
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    while(A.length<B.length){
        A = A+A;
    }
    console.log(A)
};
var A = 'abcd'
var B = 'cdabcdab'
console.log(repeatedStringMatch(A,B))