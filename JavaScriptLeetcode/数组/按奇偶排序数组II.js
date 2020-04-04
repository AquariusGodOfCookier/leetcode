// 按奇偶排序数组 II
// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let result = [];
    let evenIndex = 0;
    let oddIndex = 1;
    for(let i of A){
        if(i%2==0){
            result[evenIndex] = i;
            evenIndex +=2;
        }else{
            result[oddIndex] = i;
            oddIndex += 2;
        }
    }
    return result;
};
var A = [4,2,5,7];
console.log(sortArrayByParityII(A));