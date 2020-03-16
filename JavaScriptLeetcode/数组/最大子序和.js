// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
/**
 * @author dong.sun
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = 0;
    let isNegative = true;
    let sum = 0;
    if (nums.length == 1) {
        return nums[0]
    }
    //判断是否全部为负数
    nums.forEach(item => {
        if (item > 0) {
            isNegative = false;
        }
    })
    if (isNegative) {
        max = nums[0];
        for (let i = 1; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum > 0) {
                max = Math.max(sum, max);
            } else if (sum < 0) {
                sum = 0
            }
        }
    }
    return max;
};
var nums = [-1,-1,-2, -2];
console.log(maxSubArray(nums));