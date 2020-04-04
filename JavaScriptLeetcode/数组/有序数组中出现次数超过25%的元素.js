// 有序数组中出现次数超过25%的元素
// 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，
// 它的出现次数超过数组元素总数的 25%。

// 请你找到并返回这个整数
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
   let map = new Map();
   arr.forEach(item=>{
       map.set(item,map.has(item)?map.get(item)+1:1)
   })
   let list = Array.from(map).sort((a,b)=>{
       return b[1]-a[1]
   })
   return list[0][0];
};
var arr = [1,2,2,6,6,6,6,7,10];
console.log(findSpecialInteger(arr));