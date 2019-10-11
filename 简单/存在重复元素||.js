/**
 * @param {number[]} nums
 * @param {number} k
 * @return {bollean}
 */

var nums = [1, 2, 3, 1];
var k = 2;
//判断是否存在重复元素
var containsNearbyDuplicate = function (nums) {
    let obj = new Set();
    let isDuplicate = false;
    nums.forEach(element => {
        if (obj.has(element)) {
            isDuplicate = true;
        }
        obj.add(element)
    });
    return isDuplicate;
}
//判断是否存在重复元素，且两个重复元素的索引绝对值差是否为k
// var containsNearbyDuplicate = function(nums,k){
//     let obj = new Set();
//     for(let i=0;i<nums.length;i++){
//         if(obj.has(nums[i])){
//             return true;
//         }
//         obj.add(nums[i])
//         if(obj.size>k){
//             obj.delete(nums[i-k]);
//         }
//     }
//     return false;

//  }

console.log(containsNearbyDuplicate(nums, k));