/**
 * input:
 * 4
 * 1
 * 2
 * 3
 * 4
 * output:
 * [1,2,3,4]
 * 
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];//转化成数字类型
    if (inputArr.length == (nLine + 1)) {
        var arr = inputArr.slice(1);
        console.log(arr);
        inputArr = [];
    }
});