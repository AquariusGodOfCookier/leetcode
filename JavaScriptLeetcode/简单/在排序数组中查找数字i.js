// 在排序数组中查找数字i
//统计一个数字在排序数组中出现的次数。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            count++;
        }
    }
    return count;
};
var nums = [5,7,7,8,8,10];
var target = 6;
console.log(search(nums,target))