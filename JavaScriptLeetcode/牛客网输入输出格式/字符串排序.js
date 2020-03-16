const readline = require('readline');
var inputArr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function (input) {
    inputArr.push(input);
    var nline = +inputArr[0];
    if (inputArr.length == (nline + 1)) {
        var arr = inputArr.slice(1);
        strOrder(arr);
        inputArr = [];
    }
})
var strOrder = function(arr){
    let list = [];
    arr.forEach(str=>{
        let numberStr = str.slice(-6);
        list.push(parseInt(numberStr,10))
    })
    list.sort((a,b)=>{
        return a-b;
    })
    list.forEach(item=>{
        console.log(item)
    })
}