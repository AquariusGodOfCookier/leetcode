// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
var num_line = 0;
var inputArr = [];
var result = [];
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       n = parseInt(line.trim())
   } else {
       inputArr.push(line);
       num_line+=1;
       if(num_line == 3){
        //    result.push(changeArr(inputArr[1],inputArr[2]))
        console.log(changeArr(inputArr[1],inputArr[2]))
           inputArr = [];
           num_line = 0;
       }
       cur_line+=1;
   }
    
   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (3*n === cur_line) {
       // 输出结果
       n = -1;
    //    console.log(result);
       cur_line = 0;
       result = [];
       // 重新初始化相关变量
   }
});
var changeArr = function(arrA,arrB){
    arrA = arrA.split(' ').map(item=>{
        return parseInt(item)
    })
    arrB = arrB.split(' ').map(item=>{
        return parseInt(item);
    })
    let fontIndex = 0;
    let backIndex = 0;
    for(let i=0;i<arrA.length;i++){
        if(arrA[i]!=arrB[i]){
            fontIndex = i;
            break;
        }
    }
    for(let i=arrA.length-1;i>=0;i--){
        if(arrA[i]!=arrB[i]){
            backIndex = i;
            break;
        }
    }
    if(fontIndex == backIndex){
        return true;
    }
    let flag = Math.abs(arrA[fontIndex]-arrB[fontIndex]);
    for(let i=fontIndex;i<=backIndex;i++){
        if(parseInt(arrA[i])+flag != parseInt(arrB[i])){
            return 'NO';
        }
    }
    return 'YES';
}