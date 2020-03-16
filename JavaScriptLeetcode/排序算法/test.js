var bubbleSort = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
var selectSort = function (arr) {
    let minIndex;
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}
var insertSort = function (arr) {
    let preIndex, current;
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
var mergeSort = function (arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return _mergeSort(mergeSort(left), mergeSort(right));

}
var _mergeSort = function (left, right) {
    let result = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result
}
var quickSort = function(numList){
    _quickSort(numList,0,numList.length-1);
    return numList;
}
var _quickSort = function(arr,left,right){
    if(left >= right){
        return;
    }
    let low = left;
    let high = right;
    let base = left;
    while(low < high){
        while (high > base && arr[high] >= arr[base]) {
            high--;
        }
        while (low < high && arr[low] <= arr[base]) {
            low++;
        }
        [arr[base],arr[high],arr[low]] = [arr[high],arr[low],arr[base]];
        base = low;
    }
    _quickSort(arr,left,base-1);
    _quickSort(arr,base+1,high);
    return arr;
}
var numList = [5, 4, 7, 1, 9, 35, 67, 2, 88, 1];
// console.log(bubbleSort(numList));
// console.log(selectSort(numList));
// console.log(insertSort(numList));
// console.log(mergeSort(numList));
console.log(quickSort(numList));