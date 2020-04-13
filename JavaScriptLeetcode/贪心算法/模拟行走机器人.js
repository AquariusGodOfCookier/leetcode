// 模拟行走机器人
// 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

// -2：向左转 90 度
// -1：向右转 90 度
// 1 <= x <= 9：向前移动 x 个单位长度
// 在网格上有一些格子被视为障碍物。

// 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

// 如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

// 返回从原点到机器人的最大欧式距离的平方。
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let di = 0;
    let endx = 0;
    let endy = 0;
    let result = 0;
    let obstaclesMap = new Map();
    for (let item of obstacles) {
        obstaclesMap.set(item[0] + '-' + item[1], true);
    }
    for (let item of commands) {
        if (item == -1) {
            di = (di + 1) % 4;
        } else if (item == -2) {
            di = (di + 3) % 4;
        } else {
            for (let i = 1; i <= item; i++) {
                let nextx = endx + dx[di];
                let nexty = endy + dy[di];
                if (obstaclesMap.has(nextx + '-' + nexty)) {
                    break;
                }
                endx = nextx;
                endy = nexty;
                result = Math.max(result,endx*endx+endy*endy);
            }
        }
    }
    return result;
};
var commands = [4, -1, 3],
    obstacles = [];
console.log(robotSim(commands, obstacles));