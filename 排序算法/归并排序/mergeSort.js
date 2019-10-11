// /**
//  * @param {Array} arr
//  * @return {Array}
//  */

var mergeSort = function (arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
var merge = function (left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // 最后肯定左侧或者右侧得剩下一个，push到数组中
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}
var numList = [5, 4, 7, 1, 9, 35, 67, 2, 88, 1];
console.log(mergeSort(numList));
