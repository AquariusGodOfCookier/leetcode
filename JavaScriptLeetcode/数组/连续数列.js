// 给定一个整数数组（有正数有负数），找出总和最大的连续数列，并返回总和。
// 连续数列
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    for(let i=1;i<nums.length;i++){
        nums[i] = Math.max(nums[i-1]+nums[i],nums[i]);
        res = Math.max(res,nums[i]);
    }
    return res;
};
var nums =  [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums))