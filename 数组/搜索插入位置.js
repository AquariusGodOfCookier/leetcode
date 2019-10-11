// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:
// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:
// 输入: [1,3,5,6], 0
// 输出: 0
/**
 * @author dong.sun
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // 先判断这个target在不在这个nums里
    if(nums.indexOf(target)==-1){
        // target不在这个nums里
        // 判断边界
        if(nums[0]>target){
            return 0;
        }
        if(nums[nums.length-1]<target){
            return nums.length;
        }
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]<target && nums[i+1]>target){
                return i+1;
            }
        }
    }else{
        return nums.indexOf(target);
    }
};
var nums = [1,3,5,6];
var target = 5;
console.log(searchInsert(nums,target));