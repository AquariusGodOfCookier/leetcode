// 二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。

// 每个 LED 代表一个 0 或 1，最低位在右侧。
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    let result = [];
    let light = new Array(10).fill(0);
    // 8 4 2 1
    // 32 16 8 4 2 1 
    backTrack(num, 0, light, result);
    return result;
};
var backTrack = function (num, pos, time, result) {
    if (num == 0) {
        let hour = time[0] + 2 * time[1] + 4 * time[2] + 8 * time[3];
        let minute = time[4] + 2 * time[5] + 4 * time[6] + 8 * time[7] + 16 * time[8] + 32 * time[9];
        if (hour < 12 && minute < 60) {
            result.push(`${hour}:${minute<10?'0'+minute:minute}`)
        }
        return;
    }
    for (let i = pos; i <= 10 - num; i++) {
        time[i]++;
        backTrack(num - 1, i + 1, time, result);
        time[i]--;
    }
}

var num = 1;
console.log(readBinaryWatch(num));