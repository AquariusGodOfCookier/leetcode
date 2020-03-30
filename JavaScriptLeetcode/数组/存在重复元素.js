// 给定一个整数数组，判断是否存在重复元素。

// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
// 存在重复元素
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let newList = [];
//     for(let i=0;i<nums.length;i++){
//         if(newList.indexOf(nums[i])!=-1){
//             return true;
//         }
//         newList.push(nums[i]);
//     }
//     return false;
// };
var containsDuplicate = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            return true;
        }
    }
    return false;
};
var nums = [1,2,3,1];
console.log(containsDuplicate(nums))