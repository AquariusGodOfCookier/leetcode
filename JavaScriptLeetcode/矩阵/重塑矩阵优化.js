/**
给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。
重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。
如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
示例 1:

输入: 
nums = [[1,2],[3,4]]
r = 1, c = 4
输出: 
[[1,2,3,4]]
解释:
行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
示例 2:
输入: 
nums = [[1,2],[3,4]]
r = 2, c = 4
输出: 
[[1,2],
 [3,4]]
解释:
没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if(nums.length*nums[0].length!=r*c){
        return nums;
    }
    let singleMatrix = [];
    for(let i=0;i<r;i++){
        singleMatrix[i] = new Array(c);
    }
    let i=0,j=0;
    nums.forEach(item=>{
        item.forEach(v=>{
            singleMatrix[i][j] = v;
            j = j+1;
            if(j==c){
                i=i+1;
                j=0;
            }
        })
    })
   return singleMatrix
};
var nums = [[1, 2], [3, 4]];
console.log(matrixReshape(nums, 1, 4));