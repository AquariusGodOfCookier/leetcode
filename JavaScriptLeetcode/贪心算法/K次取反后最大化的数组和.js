// K 次取反后最大化的数组和
// 给定一个整数数组 A，我们只能用以下方法修改该数组：
// 我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。
// （我们可以多次选择同一个索引 i。）

// 以这种方式修改数组后，返回数组可能的最大和。

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, k) {
    A.sort((a,b)=>a-b);
    for(let i=0;i<A.length;i++){
        if(A[i]<0){
            if(k>0){
                A[i] = 0-A[i];
                k--;
            }else{
                break;
            }
        }
    }
    if(k>0){
        A.sort((a,b)=>a-b);
        while(k){
            A[0] = -A[0];
            k--;
        }
        return A.reduce((pre,cur)=>{
            return pre+cur;
        },0);
    }else{
        return A.reduce((pre,cur)=>{
            return pre+cur;
        },0);
    }
};
var A = [2,-3,-1,5,-4], K = 2;
console.log(largestSumAfterKNegations(A,K));