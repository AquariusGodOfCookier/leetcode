// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 示例 1:
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for(let i=0;i<k;i++){
//         nums.unshift(nums.pop());
//     }
//    return nums;
// };
var rotate = function(nums, k) {
    return nums.slice(-k).concat(nums.slice(0,k+1))
};
var nums = [1,2,3,4,5,6,7];
var k = 3;
console.log(rotate(nums,k));