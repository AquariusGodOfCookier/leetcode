/**
 * @param {Array} arr 要搜索的数组
 * @param {number} num 要搜索的数字
 * @return {Number} 如果存在，返回该数字在数组中的位置，如果不存在，返回-1
 */
// 顺序搜索，效率最低
var indexOf = function (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }
    return -1;
}

var arr = [1, 2, 3, 4, 5, 6];
var num = 40;
//console.log(indexOf(arr, num));
var left = 0;
var right = arr.length - 1;
var mid = Math.floor(arr.length / 2);
var left = arr.slice(0, mid);
console.log(left)