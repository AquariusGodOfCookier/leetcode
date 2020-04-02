// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，
// 并且这 n 个数相加和为 0 。
// 和为零的N个唯一整数
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let result = [];
    let item = n%2==0?n/2:(n-1)/2;
    for(let i=-item;i<0;i++){
        result.push(i);
    }
    for(let i=1;i<=item;i++){
        result.push(i)
    }
    result.length==n?result:result.push(0);
    return result;
};
var n= 5;
console.log(sumZero(n));