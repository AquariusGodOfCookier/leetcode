// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。
// 在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。
// 给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），
// 返回总的分钟数。
// 按摩师
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    if(nums.length==0){
        return 0;
    }
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};

var nums = [];
console.log(massage(nums));