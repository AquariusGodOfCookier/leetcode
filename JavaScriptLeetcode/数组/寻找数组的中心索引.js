// 寻找数组的中心索引
// 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

// 我们是这样定义数组中心索引的：
// 数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，
// 那么我们应该返回最靠近左边的那一个。
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftNums = 0;
    let sumNums = nums.reduce((pre,cur)=>{
        return pre+cur
    },0);
    for(let i=0;i<nums.length;i++){
        if(leftNums == sumNums-nums[i]-leftNums){
            return i;
        }
        leftNums += nums[i]
    }
    return -1;
};
var nums = [-1,-1,-1,0,1,1];
console.log(pivotIndex(nums));