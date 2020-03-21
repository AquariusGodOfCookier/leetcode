// 在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。

// 移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。

// 注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。

// 机器人能否返回原点

/**
 * @param {string} moves
 * @return {boolean}
 */
// var judgeCircle = function(moves) {
//     let updownCount = 0;
//     let leriCount = 0;
//     for(let i=0;i<moves.length;i++){
//         if(moves[i]=='U'){
//             updownCount+=1;
//         }else if(moves[i]=='D'){
//             updownCount-=1;
//         }
//         if(moves[i]=='L'){
//             leriCount+=1;
//         }else if(moves[i]=='R'){
//             leriCount-=1;
//         }
//     }
//     return updownCount==0 && leriCount==0

// };
var judgeCircle = function(moves) {
    let obj = {
        "U":0,
        "D":0,
        "L":0,
        "R":0
    }
    for(let i of moves){
        obj[i]++;
    }
    return obj['U']==obj['D'] && obj['L'] == obj['R']
};
var moves = "DU"

console.log(judgeCircle(moves))