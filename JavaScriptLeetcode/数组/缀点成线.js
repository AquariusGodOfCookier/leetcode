// 缀点成线
// 在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，
// 其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

// 请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，
// 否则请返回 false。
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x1 = coordinates[1][0]-coordinates[0][0];
    let y1 = coordinates[1][1]-coordinates[0][1];
    for(let i=1;i<coordinates.length-1;i++){
        let x2 = coordinates[i+1][0]-coordinates[i][0];
        let y2 = coordinates[i+1][1]-coordinates[i][1];
        if(x1*y2 != x2*y1){
            return false;
        }
    }
    return true;
};
var coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
console.log(checkStraightLine(coordinates))