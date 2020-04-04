// 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。
// 这里将 k-diff 数对定义为一个整数对 (i, j), 
// 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
//数组中的K-diff数对
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    if (k < 0) {
        return 0;
    }
    let map = new Map();
    for (let i of nums) {
        map.set(i, map.has(i) ? map.get(i) + 1 : 1);
    }
    let count = 0;
    map.forEach((key, value) => {
        if (k == 0) {
            if (key > 1) {
                count += 1;
            }
        } else {
            if (map.has(value + k)) {
                count += 1;
            }
        }
    })
    return count;
};
var nums = [1, 2, 3, 4, 5], k = 1
console.log(findPairs(nums, k));