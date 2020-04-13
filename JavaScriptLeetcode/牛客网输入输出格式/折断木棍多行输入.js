// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var cur_line = 0;
var inputArr = [];
rl.on('line', function(line){ // javascript每行数据的回调接口
   inputArr.push(line);
   cur_line+=1;
   if(cur_line==2){
       console.log(breakNumber(inputArr[1]));
       cur_line = 0;
       inputArr = [];
   }

});
var breakNumber = function(list){
    list = list.split(' ').map(item=>{
        return parseInt(item);
    })
    let count = 0;
    let stack = [];
    for(let i=list.length-1;i>=0;i--){
        if(stack.length>0 && stack[stack.length-1]<list[i]){
            let t = Math.floor((list[i]-1)/stack[stack.length-1]);
            count += t;
            stack.push(list[i]/(t+1));
            continue;
        }
        stack.push(list[i]);
    }
    return count;
}