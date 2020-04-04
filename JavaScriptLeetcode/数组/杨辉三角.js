// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = new Array(numRows);
    result[0] = [1];
    for(let i=1;i<numRows;i++){
        result[i] = [];
        result[i-1].reduce((pre,cur)=>{
            result[i].push(pre+cur);
            return cur;
        },0)
        result[i].push(1)
    }
    return numRows<=0?[]:result;
};
var numRows = 0;
console.log(generate(numRows));