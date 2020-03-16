// 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var lengthOfLIS = function(nums) {
    if(nums.length==0){
        return 0;
    }
    if(nums.length==1){
        return 1;
    }
    let len = nums.length;
    let newNums = new Array(len).fill(1);
    for(let i=1;i<len;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                newNums[i] = Math.max(newNums[i],newNums[j]+1)
            }else{
                newNums[i] = Math.max(newNums[i],1)
            }
        }
    }
    newNums.sort((a,b)=>{
        return b-a;
    })
    return newNums[0]
};
var nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums))