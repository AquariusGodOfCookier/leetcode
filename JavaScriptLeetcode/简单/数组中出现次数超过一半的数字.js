// 数组中出现次数超过一般的数字
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    return nums[Math.floor(nums.length/2)]
};

// 摩尔投票法
var majorityElement = function(nums) {
    let count = 0;
    let num = 0;
    for(let i=0;i<nums.length;i++){
        if(count == 0){
            num = nums[i];
        }
        count += nums[i]==num?1:-1;
    }
    return num;
};
var nums = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(nums))