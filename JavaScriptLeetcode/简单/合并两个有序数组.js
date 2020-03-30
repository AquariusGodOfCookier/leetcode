// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m-1;
    let len2 = n-1;
    let len = m+n-1;
    while(len1 >=0 && len2 >= 0){
        nums1[len--] = nums1[len1]>nums2[len2]?nums1[len1--]:nums2[len2--]
    }
    console.log(nums1)
};
var nums1 = [1,2,3,0,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;
console.log(merge(nums1,m,nums2,n));