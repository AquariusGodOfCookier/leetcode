// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
// 三个数的最大乘积
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    });
    return Math.max(nums[0]*nums[1]*nums[nums.length-1],nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
};
var nums = [1000,1000,2,1,2,5,3,1];
console.log(maximumProduct(nums));