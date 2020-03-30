// 使数组唯一的最小增量
// 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

// 返回使 A 中的每个值都是唯一的最少操作次数。
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A.sort((a,b)=>{
        return a-b;
    });
    let count = 0;
    for(let i=1;i<A.length;i++){
        if(A[i]<=A[i-1]){
            count += A[i-1]-A[i]+1;
            A[i] = A[i-1]+1
        }
    }
    return count;
};
var A = [3,3,0,2,0,9,2,11,10,14,5,13,6,5,1];
console.log(minIncrementForUnique(A))