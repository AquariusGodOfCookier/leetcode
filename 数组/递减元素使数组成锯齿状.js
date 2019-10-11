// 给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。
// 如果符合下列情况之一，则数组 A 就是 锯齿数组：
// 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
// 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
// 返回将数组 nums 转换为锯齿数组所需的最小操作次数。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：2
// 解释：我们可以把 2 递减到 0，或把 3 递减到 1。
// 示例 2：
// 输入：nums = [9,6,1,6,2]
// 输出：4
/**
 * @author dong.sun
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
    // 第一种做法，暴力解法，分别求出转换成奇偶锯齿数组需要操作的次数，取最小值
    let even_nums = [];
    let odd_nums = [];
    nums.forEach(i => {
        even_nums.push(i);
        odd_nums.push(i);
    })
    let even_count = 0; // 偶数
    let odd_count = 0;  // 奇数
    // 偶数最大开始
    let even = 1; //因为数组下标从0开始，所以定义的时候奇数才代表数组中的偶数下标
    let odd = 0;
    while (even <= even_nums.length) {
        if (even == even_nums.length-1) {
            while (even_nums[even] <= even_nums[even + 1]) {
                even_nums[even + 1]--;
                even_count++;
            }
        } else {
            while (even_nums[even] <= even_nums[even - 1]) {
                even_nums[even - 1]--;
                even_count++;
            }
            while (even_nums[even] <= even_nums[even + 1]) {
                even_nums[even + 1]--;
                even_count++;
            }
        }
        even += 2;
    }
    while (odd <= odd_nums.length) {
        if (odd == 0) {
            while (odd_nums[odd] <= odd_nums[odd + 1]) {
                odd_nums[odd + 1]--;
                odd_count++;
            }
        } else if (odd == odd_nums.length-1) {
            while (odd_nums[odd] <= odd_nums[odd - 1]) {
                odd_nums[odd - 1]--;
                odd_count++;
            }
        } else {
            while (odd_nums[odd] <= odd_nums[odd - 1]) {
                odd_nums[odd - 1]--;
                odd_count++;
            }
            while (odd_nums[odd] <= odd_nums[odd + 1]) {
                odd_nums[odd + 1]--;
                odd_count++;
            }
        }
        odd += 2;
    }
    return Math.min(even_count, odd_count)
};
var nums = [9,6,1,6,2];
console.log(movesToMakeZigzag(nums));