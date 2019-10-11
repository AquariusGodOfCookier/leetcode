/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [1,3,7,6,9,11];
var target = 9;
var twoSum = function (nums, target) {
    let map = new Map();
    for(let i = 0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }   
        map.set(nums[i],i);
    }
    
}
console.log(twoSum(nums, target))