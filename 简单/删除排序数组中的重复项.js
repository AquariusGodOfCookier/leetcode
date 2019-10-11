/**
 * 不允许使用额外的空间
 * @param {number[]} nums
 * @return {number}
 */
var nums = [0,0,1,1,1,2,2,3,3,4];
//解法1
// var removeDuplicates = function(nums) {
//     let flag = 0;
//     for(let i=flag+1;i<nums.length;i++){
//         if(nums[flag]!=nums[i]){
//             flag++;
//             nums[flag]=nums[i]
//         }
//     }
//     return flag;
// };

//解法2
var removeDuplicates = function (nums) {
    let flag = 0;
    for(let i=flag+1;i<nums.length;i++){
        if(nums[flag]===nums[i]){
            nums.splice(i,1);
            i=i-1;
            flag = flag-1;
        }
        flag++;
    }
    return nums.length
 }

console.log(removeDuplicates(nums));