// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

// 更正式地，检查是否存在两个下标 i 和 j 满足：

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var checkIfExist = function(arr) {
//     for(let index in arr){
//         let value = arr[index]
//         if(index!=arr.indexOf(value*2) && arr.indexOf(value*2)!=-1){
//             return true
//         }
//     }
//     return false;
// };
var checkIfExist = function(arr) {
    let map = new Map();
    for(let i of arr){
       map.set(i,map.has(i)?map.get(i)+1:1);
    }
    for(let i of map.keys()){
        if(i!=0 && map.has(2*i) || i==0 && map.get(0)>=2){
            return true
        }
    }
    return false;
};
var arr = [-10,12,-20,-8,15]
console.log(checkIfExist(arr));