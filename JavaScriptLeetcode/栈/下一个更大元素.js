// 下一个更大元素
// 给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
// 找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 
// 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let item of nums1){
        let index = nums2.indexOf(item);
        let flag = false;
        for(let i=index;i<nums2.length;i++){
            if(nums2[i]>item){
                result.push(nums2[i]);
                flag = true;
                break;
            }
        }
        if(!flag){
            result.push(-1);
        }
    }
    return result;
};
var nums1 = [2,4], nums2 = [1,2,3,4];
console.log(nextGreaterElement(nums1,nums2));