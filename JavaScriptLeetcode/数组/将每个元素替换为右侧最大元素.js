// 将每个元素替换为右侧最大元素
// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

// 完成所有替换操作后，请你返回这个数组。
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
//     for(let i=0;i<arr.length-1;i++){
//         let max = Math.pow(2,-31);
//         for(let j=i+1;j<arr.length;j++){
//             max = Math.max(arr[j],max);
//         }
//         arr[i] = max;
//     }
//     arr[arr.length-1] = -1;
//     return arr;
// };
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let rightMax = arr[arr.length-1];
    arr[arr.length-1] = -1;
    for(let i=arr.length-2;i>=0;i--){
        let temp = arr[i];
        arr[i] = rightMax;
        if(temp>rightMax){
            rightMax = temp;
        }
    }
    return arr;
};
var arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));