/**
 * @param {Array} arr
 * @return {Array}
 */

var insertSort = function (arr) {
    let preIndex, current;
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) { // 把定位索引值订到当前排完序的首位preIndex，从preIndex+1往前比较，如果前一个比这个大，就继续往前，如果前一个比这个小，就跳出循环，在preIndex+1处插入
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;

}
var numList = [5, 4, 7, 1, 9, 35, 67, 2, 88, 1];
console.log(insertSort(numList));