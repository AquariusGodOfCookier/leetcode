// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
// 你可以返回满足此条件的任何数组作为答案。
// 示例：
// 输入：[3,1,2,4]
// 输出：[2,4,3,1]
// 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

/**
 * @author dong.sun
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let arr = [];
    A.forEach(item=>{
        if(item%2==0){
            arr.unshift(item);
        }else{
            arr.push(item);
        }
    })
    return arr;
};

var A = [3,1,2,4];
console.log(sortArrayByParity(A));