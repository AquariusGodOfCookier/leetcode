var quickSort = function (nums) {
    _quickSort(nums, 0, nums.length - 1);
    return nums;
}
var _quickSort = function (num, left, right) {
    if (left >= right) {
        return;
    }
    let low = left;
    let high = right;
    let base = left; // 基准点索引值
    while (low < high) {
        while (high > base && num[high] >= num[base]) {
            high--;
        }
        while (low < high && num[low] <= num[base]) {
            low++;
        }
        [num[base],num[high],num[low]] = [num[high],num[low],num[base]];
        base = low;
    }
    _quickSort(num,left,base-1);
    _quickSort(num,base+1,right);
    return num;
}
var nums =  [5, 4, 7, 1, 9, 35, 67, 2, 88, 1];
console.log(quickSort(nums));