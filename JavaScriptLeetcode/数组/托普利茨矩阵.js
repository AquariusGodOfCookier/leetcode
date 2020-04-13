// 托普利茨矩阵
// 如果一个矩阵的每一方向由左上到右下的对角线上具有相同元素，那么这个矩阵是托普利茨矩阵。

// 给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True。
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let M = matrix.length;
    let N = matrix[0].length;
    if(M==1 || N == 1){
        return true;
    }
    for(let i=1;i<M;i++){
        for(let j=1;j<N;j++){
            if(matrix[i][j]!=matrix[i-1][j-1]){
                return false;
            }
        }
    }
    return true;
};
var matrix = [
    [1,2],
    [2,2]
  ]
console.log(isToeplitzMatrix(matrix));