// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
// 注意你不能在买入股票前卖出股票。
// 示例 1:
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 示例 2:
// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
/**
 * @author dong.sun
 * @param {number[]} prices
 * @return {number}
 */
// 暴力法
var maxProfit = function (prices) {
    let sum = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        let max = 0;
        for (let j = i + 1; j < prices.length; j++) {
            max = Math.max(prices[j] - prices[i], max)
        }
        sum = Math.max(sum, max);
    }
    return sum;
};
// 执行用时 :428 ms, 在所有 JavaScript 提交中击败了30.96%的用户
// 内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了20.04%的用户

// 最小谷与最大峰方法
var maxProfit = function (prices) {
    // 最小谷与最大峰
    let min = Number.MAX_VALUE;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min
        }
    }
    return max;
};
var prices = [7, 6, 4, 3, 1];
// console.log(maxProfit(prices));

// var x = 10;
// var obj = {
//     x:20,
//     fn:function(){
//         var x = 30;
//         return this.x;
//     }
// }
// console.log(obj.fn());
// console.log((obj.fn)());
// console.log((obj.fn = obj.fn)());
// console.log((obj.fn,obj.fn)())
// console.log(obj.fn.apply(window))

// var i =20;
// function a(i){
//     console.log(i);
//     console.log(arguments[0]);
//     var i = 2;
//     console.log(i);
//     console.log(arguments[0])
// }
// a(10)
var arr3 = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4},
 {name: 'c',id: 6}, {name: 'b',id: 6}, {name: 'd',id: 7}];
let deWeightThree = () => {
    let name = 'name';
    let map = new Map();
    for (let item of arr3) {
        if (!map.has(item.name)) {
            map.set(item.name, item);
        }
    }
    return [...map.values()];
}
let newArr3 = deWeightThree();
console.log('%c%s', 'color:red;', '方法三：es6,newArr3', newArr3);
6d 7a 8a 11b 12a 15c 17c 18d 19b