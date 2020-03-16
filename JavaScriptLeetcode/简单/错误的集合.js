// 集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，
// 导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，
// 导致集合丢失了一个整数并且有一个元素重复。

// 给定一个数组 nums 代表了集合 S 发生错误后的结果。
// 你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将
// 它们以数组的形式返回。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    let repeat = 0;
    let count1 = 0;
    let count2 = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            repeat = nums[i];
        }
        count1 += nums[i];
        count2 += i+1;
    }
    if(count1>count2){
        return [repeat,repeat-Math.abs(count1-count2)]
    }else{
        return [repeat,repeat+Math.abs(count1-count2)]
    }
};
var nums = [1,2,2,4];
console.log(findErrorNums(nums))