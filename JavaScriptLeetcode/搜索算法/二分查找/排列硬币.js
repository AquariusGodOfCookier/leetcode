// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
// 给定一个数字 n，找出可形成完整阶梯行的总行数。
// n 是一个非负整数，并且在32位有符号整型的范围内。

// 示例 1:
// n = 5
// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤
// 因为第三行不完整，所以返回2.
/**
 * @author dong.sun
 * @param {number} n
 * @return {number}
 */
// 使用数组存储每个项
// var arrangeCoins = function(n) {
//     let arr = new Array();
//     let index = 1;
//     while(n>0){
//         arr.push(index);
//         index++;
//         n -=index;
//     }
//     return arr.length;
// };
//执行用时 :260 ms, 在所有 JavaScript 提交中击败了 5.39% 的用户
//内存消耗 :104.3 MB, 在所有 JavaScript 提交中击败了 5.48% 的用户


// var arrangeCoins = function(n) {
//     if(n<=0){
//         return 0;
//     }else {
//         let current = 0;
//         for(let i=1;i<=n;i++){
//             current += i;
//             if(current>n){
//                 return i-1;
//             }else if(current==n){
//                 return i;
//             }
//         }
//     }
// };
// 执行用时 :164 ms, 在所有 JavaScript 提交中击败了12.32%的用户
// 内存消耗 :36.6 MB, 在所有 JavaScript 提交中击败了13.70%的用户

// 数学公式+二分查找
// var arrangeCoins = function (n) {
//     let left = 0;
//     let right = n;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         let target = (mid*(mid+1))/2;
//         if(target==n){
//             return mid;
//         }else if(target>n){
//             right = mid-1;
//         }else {
//             left = mid+1;
//         }
//     }
//     return left-1;
// };
// 执行用时 :88 ms, 在所有 JavaScript 提交中击败了99.51%的用户
// 内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了15.07%的用户

// 数学公式
var arrangeCoins = function (n) {
    // n = (x^2 + x)/2  x = -1+sqrt(8n+1)/2
    return Math.floor((-1+Math.sqrt(8*n+1))/2);
};
// 执行用时 :112 ms, 在所有 JavaScript 提交中击败了85.22%的用户
// 内存消耗 :36.2 MB, 在所有 JavaScript 提交中击败了28.77%的用户

var n = 5;
console.log(arrangeCoins(n));