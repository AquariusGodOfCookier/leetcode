// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
// 你可以假设数组中不存在重复的元素。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 示例 1:
// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:
// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length == 0) {
        return -1;
    }
    if (nums.length == 1) {
        if (nums[0] == target) {
            return 0;
        } else {
            return -1;
        }
    }
    if (nums[0] > target) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] == target) {
                return i;
            } else if (nums[i] < nums[i - 1]) {
                return -1;
            } 
        }
        return -1;
    } else if (nums[0] <= target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                return i;
            } else if (nums[i] > nums[i + 1]) {
                return -1;
            } 
        }
        return -1;
    }
};
var nums = [1,3];
//var nums = [4,5,6,7,0,1,2]
var target = 7;
console.log(search(nums, target));