//子数组最大平均数 I
// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        if(i+1<=k){
            sum += nums[i];
            max = sum;
        }else{
            sum = sum-nums[i-k]+nums[i];
            max = Math.max(max,sum)
        }
    }
    return max/k;
};
var nums = [1,12,-5,-6,50,3], k = 4;
console.log(findMaxAverage(nums,k))