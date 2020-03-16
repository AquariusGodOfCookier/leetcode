/**
 * @param {Array} arr 要搜索的数组
 * @param {number} num 要搜索的数字
 * @return {Number} 如果存在，返回该数字在数组中的位置，如果不存在，返回-1
 */
// 二分搜索要求被搜索的数组已经排序
// 1.选择数组的中间值
// 2.如果中间值是被搜索的数字,返回index
// 3.如果中间值比要搜索的数字大,返回1并且在选中值左边的子数组中寻找
// 4.如果中间值比要搜索的数字小,返回1并且在选中值右边的子数组中寻找
// 简单一个数字搜索
// 循环
var search = function (arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let current = 0;
    while (low <= high) {
        console.log(current)
        if (arr[low] == target) {
            return low;
        }
        if (arr[high] == target) {
            return high;
        }
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        }
    }
    return -1;
}
//递归
var binarySearch = function (arr, num) {
    return _binarySearch(arr, num, 0, arr.length - 1);
}
var _binarySearch = function (arr, target, low, high) {
    if (low <= high) {
        if (arr[low] == target) {
            return low;
        }
        if (arr[high] == target) {
            return high;
        }
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            return _binarySearch(arr, target, low, mid - 1);
        } else if (arr[mid] < target) {
            return _binarySearch(arr, target, mid + 1, high);
        }
    }
    return -1;
}

var arr = [1,2,3,4,5,6,7,8,9];
var num = 8;
console.log(search(arr, num));
// console.log(binarySearch(arr, num));