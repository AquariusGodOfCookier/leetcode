/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode-cn.com/problems/maximum-subarray/
var nums = [-2,3,-1,1,-3];
//最大子序和
var maxSubArraySum = function(nums) {
    let sum = 0;
    let ans = nums[0];
    for(let i of nums){
        if(sum<=0){
            sum = i;
        }else{
            sum += i;
        }
        ans = Math.max(ans,sum);
    }
    return ans
};


//console.log(maxSubArraySum(nums));
console.log(maxSubArray(nums));