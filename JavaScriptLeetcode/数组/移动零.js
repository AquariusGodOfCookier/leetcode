// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 移动零
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let zeroCount = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]==0){
//             nums.splice(i,1);
//             zeroCount += 1;
//             i -=1;
//         }
//     }
//     for(let i=0;i<zeroCount;i++){
//         nums.push(0)
//     }
// };
var moveZeroes = function(nums) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j++] = temp;
        }
    }
};
var nums = [0,0,1];
console.log(moveZeroes(nums));