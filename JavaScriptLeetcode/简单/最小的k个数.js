// 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。
// 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 不排序
var getLeastNumbers = function(arr, k) {
    let list = []
    for(let i=0;i<k;i++){
        list.push(arr[i])
    }
    for(let i=k;i<arr.length;i++){
        // 判断list数组中还有没有比arr[i]值大的，有就替换
        
    }
};
var arr = [3,2,1];
var k = 2;
console.log(getLeastNumbers(arr,k));