// 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
// 第三大的数
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sortNums = Array.from(new Set([...nums])).sort((a,b)=>{
        return b-a;
    });
    if(sortNums.length>=3){
        return sortNums[2];
    }else{
        return sortNums[0];
    }
};
var nums = [2, 2, 3, 1];
console.log(thirdMax(nums));