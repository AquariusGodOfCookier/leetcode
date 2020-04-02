// 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。

// 给你一个整数数组 arr，请你从中找出并返回一个幸运数。

// 如果数组中存在多个幸运数，只需返回 最大 的那个。
// 如果数组中不含幸运数，则返回 -1 。

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        map.has(arr[i])?map.set(arr[i],map.get(arr[i])+1):map.set(arr[i],1)
    }
    let maxNumber = -1;
    for(let [key,value] of map){
        if(value==key){
            maxNumber = Math.max(maxNumber,key)
        }
    }
    return maxNumber;
};
var arr = [2,2,3,4];
console.log(findLucky(arr));