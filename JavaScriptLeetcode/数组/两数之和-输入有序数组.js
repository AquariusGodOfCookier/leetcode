// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    while (leftIndex < rightIndex) {
        let sum = numbers[leftIndex]+numbers[rightIndex]
        if (sum == target) {
            return [leftIndex+1, rightIndex+1];
        }else if(sum > target){
            rightIndex -=1;
        }else if(sum < target){
            leftIndex += 1;
        }
    }
    return [];
};
var numbers = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(numbers, target));