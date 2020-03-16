// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，
// 其余所有元素均出现两次。 
// 找出只出现一次的那两个元素。
// 只出现一次数字
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.delete(nums[i])
        }else{
            map.set(nums[i],1)
        }
    }
    let list = [];
    map.forEach((key,value)=>{
        list.push(value)
    })
    return list
};
var nums = [1,2,1,3,2,5];
console.log(singleNumber(nums))