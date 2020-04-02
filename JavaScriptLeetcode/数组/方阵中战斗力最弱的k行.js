// 给你一个大小为 m * n 的方阵 mat，方阵由若干军人和平民组成，分别用 0 和 1 表示。

// 请你返回方阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。

// 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。

// 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。

// 方阵中战斗力最弱的k行
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// var kWeakestRows = function(mat, k) {
//     let map = new Map();
//     let count = 0;
//     for(let i=0;i<mat.length;i++){
//         for(let j=0;j<mat[i].length;j++){
//             if(mat[i][j]==1){
//                 count += 1;
//             }
//         }
//         map.set(i,count)
//         count = 0;
//     }
//     let sortMap = Array.from(map).sort((a,b)=>{
//         return a[1]-b[1]
//     })
//     let result = [];
//     for(let i=0;i<sortMap.length;i++){
//         result.push(sortMap[i][0])
//     }
//     return result.splice(0,k);
// };
// var kWeakestRows = function(mat, k) {
//     let list = [];
//     for(let i=0;i<mat.length;i++){
//         list.push([i,mat[i].lastIndexOf(1)])
//     }
//     list.sort((a,b)=>{
//         return a[1]-b[1]
//     })
//     let result = []
//     for(let i=0;i<k;i++){
//         result.push(list[i][0])
//     }
//     return result;
// };
var kWeakestRows = function (mat, k) {
    let res = new Map();
    mat.forEach((item, index) => {
        let j = 0;
        item.forEach(i => {
            if (i == 1) {
                j++;
            }
        });
        res.set(index, j);
    });

    let arr = Array.from(res).sort((a, b) => {
        if (a[1] - b[1] == 0) {
            return a[0] - b[0];
            //保证索引小的在前面
        }
        return a[1] - b[1];
    });
    let resa = arr.slice(0, k).map(item => item[0]);
    return resa;
};

var mat = [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ],
    k = 3

console.log(kWeakestRows(mat, k))