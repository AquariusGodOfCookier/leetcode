// 给定一个包含了一些 0 和 1的非空二维数组 grid , 
// 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。
// 你可以假设二维矩阵的四个边缘都被水包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let x = grid.length, y = grid[0].length
    let max = 0
    for(let i=0;i<x;i++){
        for(let j =0;j<y;j++){
            if(grid[i][j]==1){
                max = Math.max(max,cntArea(grid,i,j,x,y))
            }
        }
    }
    return max

};
let cntArea = (grid, i, j, x, y) =>{
    if(i<0 || i>=x || j<0 || j>=y || grid[i][j]==0) return 0;  
    let cnt = 1
    grid[i][j] = 0
    cnt += cntArea(grid, i+1, j, x, y)
    cnt += cntArea(grid, i-1, j, x, y)
    cnt += cntArea(grid, i, j+1, x, y)
    cnt += cntArea(grid, i, j-1, x, y)
    return cnt
}
var grid = '[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]'

 console.log(maxAreaOfIsland(grid))
