// 统计位数为偶数的数字
// 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    nums.forEach(item=>{
        if(isEven(item)){
            count += 1;
        }
    })
    return count;
};
var isEven = function(item){
    return String(item).length%2==0?true:false;
}
var nums = [12,345,2,6,7896];
console.log(findNumbers(nums));