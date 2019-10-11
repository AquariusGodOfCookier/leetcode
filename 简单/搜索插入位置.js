/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//https://leetcode-cn.com/problems/search-insert-position/
var nums = [1, 3, 5, 6]; // nums 是排序过后的
var target = 5;
var searchInsert = function (nums, target) {
    if (nums.indexOf(target) == -1) {
        if (nums[0] > target) {
            nums.splice(0, 0, target);
            return nums.indexOf(target)
        }
        else if (nums[nums.length-1] < target) {
            return nums.length;
        }
        else {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] <= target && nums[i + 1] > target) {
                    nums.splice(i+1, 0, target)
                    return nums.indexOf(target)
                }
            }
        }

    } else {
        return nums.indexOf(target)
    }
};

console.log(searchInsert(nums, target));