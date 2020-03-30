// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

// 初始化 A 和 B 的元素数量分别为 m 和 n。
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let Alist = A.slice(0,m);
    let len = A.length-1;
    for(let i=Alist.length-1,j=B.length-1;i>=0,j>=0;){
        if(Alist[i]>=B[j]){ 
            A[len] = Alist[i]
            i--;
            len--;
        }else{
            A[len] = B[j];
            j--;
            len--;
        }
    }
};
var A = [1,2,3,0,0,0], m = 3;
var B = [2,5,6], n = 3;
console.log(merge(A,m,B,n));