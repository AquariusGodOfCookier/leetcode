// 查询后的偶数和
// 给出一个整数数组 A 和一个查询数组 queries。

// 对于第 i 次查询，有 val = queries[i][0], index = queries[i][1]，我们会把 val 加到 A[index] 上。然后，第 i 次查询的答案是 A 中偶数值的和。

// （此处给定的 index = queries[i][1] 是从 0 开始的索引，每次查询都会永久修改数组 A。）

// 返回所有查询的答案。你的答案应当以数组 answer 给出，answer[i] 为第 i 次查询的答案。

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let answer = new Array(A.length).fill(0);
    for(let i=0;i<queries.length;i++){
        let val = queries[i][0];
        let index = queries[i][1];
        A[index] += val;
        for(let j=0;j<A.length;j++){
            if(A[j]%2==0){
                answer[i] += A[j];
            }
        }
    }
    return answer;

};
var A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(A,queries));