//给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
//杨辉三角 II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = new Array(rowIndex+1);
    for(let i=0;i<=rowIndex;i++){
        result[i]=1;
        for(let j=i;j>1;j--){
            result[j-1] = result[j-2]+result[j-1];
        }
    }
    return result;
};
var rowIndex = 3;
console.log(getRow(rowIndex));