// 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

// 幸运数是指矩阵中满足同时下列两个条件的元素：

// 在同一行的所有元素中最小
// 在同一列的所有元素中最大

// 矩阵中的幸运数
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let result = [];
    for(let i=0;i<matrix.length;i++){
        let minNumber = Math.min(...matrix[i]);
        let mixIndex = matrix[i].indexOf(minNumber);
        let list = [];
        for(let j=0;j<matrix.length;j++){
             list.push(matrix[j][mixIndex])
        }
        let maxNumber = Math.max(...list);
        if(maxNumber == minNumber){
            result.push(maxNumber)
        }
    }
    return result;
};
var matrix =   [[1,10,4,2],[9,3,8,7],[15,16,17,12]];
console.log(luckyNumbers(matrix));