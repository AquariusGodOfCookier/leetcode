// 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。

// 你可以按照下面的规则在平面上移动：

// 每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
// 必须按照数组中出现的顺序来访问这些点。

//访问所有点的最小时间
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    for(let i=0;i<points.length-1;i++){
        let x = Math.abs(points[i+1][0]-points[i][0]);
        let y = Math.abs(points[i+1][1]-points[i][1]);
        count += Math.max(x,y)
    }
    return count;
};
var points = [[3,2],[-2,2]];
console.log(minTimeToVisitAllPoints(points));