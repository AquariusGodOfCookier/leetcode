// 滑动窗口的最大值
// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(k==0){
        return nums;
    }
    if(k>nums.length){
        return [Math.max.apply(Math,nums)];
    }
    let result = [];
    for(let i=0;i<nums.length-k+1;i++){
        let list = nums.slice(i,i+k);
        result.push(Math.max.apply(Math,list))
    }
    return result;
};
var nums = [1], k = 2;
console.log(maxSlidingWindow(nums,k));