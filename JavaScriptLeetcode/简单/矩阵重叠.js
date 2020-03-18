// 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，
// (x2, y2) 是右上角的坐标。

// 如果相交的面积为正，则称两矩形重叠。
// 需要明确的是，只在角或边接触的两个矩形不构成重叠。

// 给出两个矩形，判断它们是否重叠并返回结果。
// 矩阵重叠

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // 转换成一维投影问题
    /**
     *  |
     *  |
     *  |    —————  ————— 
     *  |    |   |  |   |
     *  |    —————  —————
     *   ————————————————————————
     */
    // 如果两个矩阵有重叠，那么他们在x轴的一维投影必有重叠，在y轴的一维投影也必有重叠
    // 第一个矩阵的x轴是 rec1[0] rec1[2]
    // 第二个矩阵的x轴是 rec2[0] rec2[2]
    // x轴重叠的可能性是 max(rec1[0],rec2[0]) < min(rec1[2],rec2[2])
    // 同理 y轴是 rec1[1] rec1[3]  rec2[1] rec[3]
    // y轴重叠的可能性是 max(rec1[1],rec2[1]) < min(rec1[3],rec2[3])
    return (Math.max(rec1[0],rec2[0])<Math.min(rec1[2],rec2[2])) && Math.max(rec1[1],rec2[1])<Math.min(rec1[3],rec2[3])
};
var rec1 = [0,0,1,1], rec2 = [1,0,2,1];
console.log(isRectangleOverlap(rec1,rec2))