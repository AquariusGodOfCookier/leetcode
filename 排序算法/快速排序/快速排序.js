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
        // let temp =num[base];
        // num[base] = num[high];
        // num[high] = num[low];
        // num[low] = temp;
        base = low;
    }
    _quickSort(num,left,base-1);
    _quickSort(num,base+1,right);
    return num;
}
var nums = [2,4,5,1,3,0,10,8,6,2,1];
console.log(quickSort(nums));