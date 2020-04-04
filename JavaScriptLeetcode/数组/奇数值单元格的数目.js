
// 给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。

// 另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。

// 你需要将每对 [ri, ci] 指定的行和列上的所有单元格的值加 1。

// 请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。
// 奇数值单元格的数目
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let arr = new Array(n).fill(new Array(m).fill(0));
    for(let [ri,ci] of indices){
        arr = arr.map((item,index)=>{
            return item.map((item2,index2)=>{
                if(index == ri){
                    item2 += 1;
                }
                if(index2 == ci){
                    item2 += 1;
                }
                return item2;
            })
        })
    }
    let count = 0;
    arr.forEach(item=>{
        item.forEach(i=>{
            if(i%2!=0){
                count += 1;
            }
        })
    })
    return count;
};


var n = 2, m = 3, indices = [[0,1],[1,1]]
console.log(oddCells(n,m,indices));