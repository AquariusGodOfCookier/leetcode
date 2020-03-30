// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 二维数组中的查找

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 暴力法
// var findNumberIn2DArray = function (matrix, target) {
//     for(let item of matrix){
//         for(let bit of item){
//             if(bit == target){
//                 return true
//             }
//         }
//     }
//     return false
// };
var findNumberIn2DArray = function (matrix, target) {
    for(let i=0;i<matrix.length;i++){
        let deeplength = matrix[i].length-1;
        if(matrix[i][0]==target){
            return true;
        }
        if(matrix[i][deeplength]==target){
            return true;
        }
        if(matrix[i][0]<target && matrix[i][deeplength]>target){
            for(let j=0;j<deeplength;j++){
                if(matrix[i][j]==target){
                    return true
                }
            }
        }
    }
    return false;
};
var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
var target = 50;
console.log(findNumberIn2DArray(matrix, target))