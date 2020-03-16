// 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
// A.length >= 3
// 在 0 < i < A.length - 1 条件下，存在 i 使得：
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[B.length - 1]
// 示例 1：
// 输入：[2,1]
// 输出：false
// 示例 2：
// 输入：[3,5,5]
// 输出：false
// 输入：[0,3,2,1]
// 输出：true
/**
 * @author dong.sun
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    // 先找到a数组的最大值，最大值左侧为递增序列，最大值右侧为递减序列，就是山脉数组
    if(A.length<3){
        return false;
    }
    let max = A[0];
    let index = 0;
    for(let i=1;i<A.length;i++){
        if(max<A[i]){ //没写等于，就是如果有相等的那我也只要第一个
            max = A[i];
            index = i;
        }
    }
    let leftList = A.slice(0,index);
    let rightList = A.slice(index+1);
    if(leftList.length==0 || rightList.length==0){
        return false;
    }
    // 判断左侧是不是递增数组，右侧是不是递减数组
    for(let i=0;i<leftList.length;i++){
        if(leftList[i]>=leftList[i+1] || leftList[i]==max){
            return false;
        }
    }
    for(let i=0;i<rightList.length;i++){
        if(rightList[i]<=rightList[i+1] || rightList[i]==max){
            return false;
        }
    }
    return true;
};
//var A = [3,5,5];
 //var A = [0,3,2,4,6,7,9,10,12,13,14,15,16,17,18,16];
console.log(validMountainArray(A));