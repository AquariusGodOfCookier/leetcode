// 有序数组的平方
// 给定一个按非递减顺序排序的整数数组 A，
// 返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let nagetiveCount = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            nagetiveCount++;
        } else {
            break;
        }
    }
    let nList = A.slice(0,nagetiveCount);
    let pList = A.slice(nagetiveCount);
    let nIndex = 0;
    let pIndex = pList.length-1;
    let result = [];
    while(nIndex<nList.length && pIndex>=0){
        if(nList[nIndex]*nList[nIndex] > pList[pIndex] * pList[pIndex]){
            result.unshift(nList[nIndex]*nList[nIndex]);
            nIndex++;
        }else{
            result.unshift(pList[pIndex]*pList[pIndex]);
            pIndex--;
        }
    }
    while(nIndex<nList.length){
        result.unshift(nList[nIndex]*nList[nIndex]);
        nIndex++;
    }
    while(pIndex>=0){
        result.unshift(pList[pIndex]*pList[pIndex]);
        pIndex--;
    }
    return result;
};
var A = [-7,-3,2,3,11];
console.log(sortedSquares(A));