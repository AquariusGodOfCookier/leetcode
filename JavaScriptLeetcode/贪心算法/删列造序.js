// 删列造序
// 给定由 N 个小写字母字符串组成的数组 A，其中每个字符串长度相等。

// 删除 操作的定义是：选出一组要删掉的列，删去 A 中对应列中的所有字符，形式上，第 n 列为 [A[0][n], A[1][n], ..., A[A.length-1][n]]）。

// 比如，有 A = ["abcdef", "uvwxyz"]，



// 要删掉的列为 {0, 2, 3}，删除后 A 为["bef", "vyz"]， A 的列分别为["b","v"], ["e","y"], ["f","z"]。



// 你需要选出一组要删掉的列 D，对 A 执行删除操作，使 A 中剩余的每一列都是 非降序 排列的，然后请你返回 D.length 的最小可能值。

/**
 * @param {string[]} A
 * @return {number}
 */
// var minDeletionSize = function(A) {
//     if(A.length == 0 || A[0].length==1){
//         return 0;
//     }
//     let result = [];
//     for(let i=0;i<A[0].length;i++){
//         let str = '';
//         for(let j=0;j<A.length;j++){
//             str += A[j][i];
//         }
//         result.push(str);
//     }
//     let count = 0;
//     for(let i = 0;i<result.length;i++){
//         if(!isHaveDown(result[i])){
//             count++;
//         }
//     }
//     return count;
// };
// var isHaveDown = function(item){
//     return item.split('').sort().join('')==item;
// }
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    if(A.length==0 || A[0].length==0){
        return 0;
    }
    let count = 0;
    for(let i=0;i<A[0].length;i++){
        for(let j=1;j<A.length;j++){
            if(A[j][i].charCodeAt()<A[j-1][i].charCodeAt()){
                count++;
                break;
            }
        }
    }
    return count;
};

var A = ["rrjk","furt","guzm"]
console.log(minDeletionSize(A));