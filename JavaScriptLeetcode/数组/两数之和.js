// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 
// 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。
// 但是，你不能重复利用这个数组中同样的元素。
// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j];
//             }
//         }
//     }
//     return []
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
       map.set(nums[i],i);
    }
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i]) && map.get(target-nums[i])!=i){
            return [i,map.get(target-nums[i])]
        }
    }
    return [];
};
var nums = [2,7,11,15];
var target = 9;
console.log(twoSum(nums,target));