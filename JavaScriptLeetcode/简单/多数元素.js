// 给定一个大小为 n 的数组，找到其中的多数元素。
//多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
//1 使用快排排序后，位于中间的
var majorityElement = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    return nums[Math.floor(nums.length/2)]
};

// 2:使用map记录
var majorityElement = function(nums) {
    let map = new Map();
    let length = Math.floor(nums.length/2);
    for(let i in nums){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    for(let a of map){
        if(a[1]>length){
            return a[0]
        }
    }
};
var nums = [3,2,3]
console.log(majorityElementMap(nums))