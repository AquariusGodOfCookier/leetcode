// 给定一个整数数组 nums，将该数组升序排列。
// 示例 1：
// 输入：[5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：
// 输入：[5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<2){
        return nums;
    }
    let mid = Math.floor(nums.length/2);
    let left = nums.slice(0,mid);
    let right = nums.slice(mid);
    return _sortArray(sortArray(left),sortArray(right));
};
var _sortArray = function(left,right){
    let arr = [];
    while(left.length && right.length){
        if(left[0]>right[0]){
            arr.push(right.shift());
        }else{
            arr.push(left.shift());
        }
    }
    while(left.length){
        arr.push(left.shift());
    }
    while(right.length){
        arr.push(right.shift());
    }
    return arr;
}
var nums = [5,1,1,2,0,0];
console.log(sortArray(nums));