/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 不对，但是不知道哪里出了问题 2019-08-26 11:19
var nums = [-1, 2, 1, -4];
var target = 1;
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b;
    })
    let sum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        let temp = 0;
        while (start < end) {
            temp = nums[i] + nums[start] + nums[end];
            if (Math.abs(sum - target) < Math.abs(temp - target)) {
                temp = sum
            }
            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return temp;
            }
        }
        return temp;
    }

};


console.log(threeSumClosest(nums, target));