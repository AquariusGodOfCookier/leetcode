// 给定一个包含 n + 1 个整数的数组 nums，
// 其数字都在 1 到 n 之间（包括 1 和 n），
// 可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    console.log(nums)
    let i=0;
    while(i<nums.length-1){
        if(nums[i]==nums[i+1]){
            return nums[i]
        }
        i++;
    }
};
var nums = [3,1,3,4,2]
console.log(findDuplicate(nums));