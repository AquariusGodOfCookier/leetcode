// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
// [3,1,2]
// [1,1]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a,b)=>{
        return a-b;
    })
    nums2.sort((a,b)=>{
        return a-b;
    })
    let arr = [];
    let i=0,j=0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]==nums2[j]){
            arr.push(nums1[i]);
            i++;
            j++;
        }else if(nums1[i]>nums2[j]){
            j++;
        }else{
            i++;
        }
    }
    return arr;
};
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
console.log(intersect(nums1, nums2));