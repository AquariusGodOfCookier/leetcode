//找出井字棋的获胜者
// A 和 B 在一个 3 x 3 的网格上玩井字棋。

// 井字棋游戏的规则如下：

// 玩家轮流将棋子放在空方格 (" ") 上。
// 第一个玩家 A 总是用 "X" 作为棋子，而第二个玩家 B 总是用 "O" 作为棋子。
// "X" 和 "O" 只能放在空方格中，而不能放在已经被占用的方格上。
// 只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。
// 如果所有方块都放满棋子（不为空），游戏也会结束。
// 游戏结束后，棋子无法再进行任何移动。
// 给你一个数组 moves，其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。

// 如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。

// 你可以假设 moves 都 有效（遵循井字棋规则），网格最初是空的，A 将先行动。

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const cases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let grid = new Array(9).fill(0)
    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i]
        let role = i % 2 ? 'B' : 'A'
        grid[x * 3 + y] = role
    }
    for (let caseItem of cases) {
        let role = grid[caseItem[0]]
        if (role) {
            if (grid[caseItem[1]] === role && grid[caseItem[2]] === role) {
                return role
            }
        }
    }
    return moves.length === 9 ? "Draw" : "Pending"
};
var moves = [
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2]
];
console.log(tictactoe(moves))