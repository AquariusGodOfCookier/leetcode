// 只出现一次的数字2
// 给定一个非空整数数组，除了某个元素只出现一次以外，
// 其余每个元素均出现了三次。找出那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort((a,b)=>{
        return a-b;
    })
    for(let i=2;i<nums.length;i+=3){
        if(nums[i-2]+nums[i-1]+nums[i]!=nums[i]*3){
            return nums[i-2]^nums[i-1]^nums[i]
        }
    }
    return nums[nums.length-1];
};
var nums = [0,1,0,1,0,1,99];
console.log(singleNumber(nums))