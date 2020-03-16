// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，
// 找出 0 .. n 中没有出现在序列中的那个数。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1 排序
var missingNumber = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < nums.length + 1; i++) {
        if (i != nums[i]) {
            return i
        }
    }
};
// 计算和
var missingNumber = function (nums) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        if(i==nums.length){
            count2 += nums.length;
            count1 += 0;
            return count2-count1
        }
        count1 += nums[i];
        count2 += i;
    }
};

var nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));