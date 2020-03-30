// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length){
        return [];
    }
    if(!matrix[0].length){
        return [];
    }
    let result = [];
    let startx = 0;
    let starty = 0;
    let endx = matrix[0].length-1;
    let endy = matrix.length-1;
    while(startx<=endx && starty<=endy){
        for(let i=startx;i<=endx;i++){
            result.push(matrix[starty][i])
        }
        for(let i=starty+1;i<=endy;i++){
            result.push(matrix[i][endx])
        }
        for(let i=endx-1;i>=startx;i--){
            if(starty==endy){
                return result;
            }
            result.push(matrix[endy][i]);
        }
        for(let i=endy-1;i>=starty+1;i--){
            if(startx==endx){
                return result;
            }
            result.push(matrix[i][startx]);
        }
        starty++;
        startx++;
        endx--;
        endy--;
    }
    return result;
};
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));