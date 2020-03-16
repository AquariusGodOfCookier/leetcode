/**
给定一个矩阵 A， 返回 A 的转置矩阵。
矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
示例 1：
输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]。
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let doublematrix = [];
    let arr = [];
    let len = A.length;
    let len1 = A[0].length;
    for(let j=0;j<len1;j++){
        for(let i=0;i<len;i++){
            arr.push(A[i][j])
        }
        doublematrix.push(arr);
        arr = [];
    }
    return doublematrix;
};
var A = [[1, 2, 3], [4, 5, 6]];
console.log(transpose(A));