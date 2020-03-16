// 给定一个整数，将其转化为7进制，并以字符串形式输出。
// 示例 1:
// 输入: 100
// 输出: "202"
// 示例 2:
// 输入: -7
// 输出: "-10"
// 注意: 输入范围是 [-1e7, 1e7] 。
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num,toBase) {
    let total = '';
    let isFlag = '';
    if(num<0){
        num = Math.abs(num);
        isFlag='-';
    }
    while(num>=toBase){
        total += num%toBase+'';
        num = Math.floor(num/toBase);
    }
    total += num%toBase;
    return isFlag+total.split('').reverse().join('');
};

var num = 100;
var toBase = 7;
console.log(convertToBase7(num,toBase));