// 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
// 消失的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i=0;i<nums.length+1;i++){
        if(nums.indexOf(i)==-1){
            return i;
        }
    }
};
var nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));