// 给定一个二进制数组， 计算其中最大连续1的个数。
// 最大连续1的个数
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//     nums = nums.join('').split(0);
//     for(let i=0;i<nums.length;i++){
//         nums[i] = nums[i].length;
//     }
//     return Math.max.apply(Math,nums)
// };
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count += 1;
        }else if(nums[i]==0){
            maxCount = Math.max(count,maxCount);
            count = 0;
        }
    }
    maxCount = Math.max(count,maxCount);
    return maxCount;
};
var nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));