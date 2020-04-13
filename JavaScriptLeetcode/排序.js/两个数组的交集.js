// 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = new Set();
    let minNum = [];
    let maxNum = [];
    if(nums1.length>nums2.length){
        minNum = nums2;
        maxNum = nums1;
    }else{
        minNum = nums1;
        maxNum = nums2;
    }
    for(let item of minNum){
        if(maxNum.indexOf(item)!=-1){
            result.add(item);
        }
    }
    return Array.from(result);
};
var nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection(nums1,nums2));