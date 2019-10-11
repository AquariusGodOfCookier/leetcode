/**
 * 在时间复杂度上表现最稳定的排序算法之一，因为无论什么数据进去都是O(n²)的时间复杂度。。。所以用到它的时候，数据规模越小越好。
 * 唯一的好处可能就是不占用额外的内存空间了吧。
 */
/**
 * @param {Array} arr
 * @return {Array}
 */

var selectSort = function(arr){
    let len = arr.length;
    let minIndex,temp;  // 找个最小值的索引
    for(let i=0;i<len-1;i++){
        minIndex = i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
var numList = [5,4,7,1,9,35,67,2,88,1];
console.log(selectSort(numList));