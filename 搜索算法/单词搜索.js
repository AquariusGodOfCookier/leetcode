// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
// 示例:
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// 给定 word = "ABCCED", 返回 true.
// 给定 word = "SEE", 返回 true.
// 给定 word = "ABCB", 返回 false.
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if(board.length==0 || word == null){
        return false;
    }
    // 定义上下左右遍历走
    let go = [[0,1],[1,0],[-1,0],[0,-1]];
    
};
var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
var word = 'ABCCED';
console.log(exist(board));