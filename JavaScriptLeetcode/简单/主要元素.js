// 如果数组中多一半的数都是同一个，则称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。

// 主要元素

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let len = Math.floor(nums.length/2);
    for(let item of nums){
        map.set(item,map.has(item)?map.get(item)+1:1)
    }
    for(let [key,value] of map){
        if(value>len){
            return key;
        }
    }
    return -1;
};
var nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));