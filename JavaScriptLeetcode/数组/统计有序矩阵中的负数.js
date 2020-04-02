// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

// 请你统计并返回 grid 中 负数 的数目

// 统计有序矩阵中的负数
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var countNegatives = function(grid) {
//     let nagetiveCount = 0;
//     for(let i=grid.length-1;i>=0;i--){
//         for(let j=grid[i].length-1;j>=0;j--){
//             if(grid[i][j]<0){
//                 nagetiveCount += 1;
//             }else{
//                 break;
//             }
//         }
//     }
//     return nagetiveCount;
// };
var countNegatives = function(grid) {
    let nagetiveCount = 0;
    let jumpList = []
    for(let i=grid.length-1;i>=0;i--){
        for(let j=grid[i].length-1;j>=0;j--){
            if(jumpList.indexOf(j)!=-1){
                break;
            }else{
                if(grid[i][j]<0){
                    nagetiveCount += 1;
                }else{
                    jumpList.push(j);
                    break;
                }
            }
        }
    }
    return nagetiveCount;
};
var grid =[[3,2],[1,0]];
console.log(countNegatives(grid))