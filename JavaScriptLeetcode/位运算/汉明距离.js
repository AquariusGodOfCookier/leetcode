// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

// 给出两个整数 x 和 y，计算它们之间的汉明距离。
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xy = x^y;
    let distance = 0;
    while(xy){
        xy = xy & (xy-1);
        distance++;
    }
    return distance;
};
console.log(hammingDistance(1,4));