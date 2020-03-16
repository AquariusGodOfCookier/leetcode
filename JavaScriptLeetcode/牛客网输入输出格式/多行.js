var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var inputs = []
rl.on('line', function(line){
  //trim()去除字符串两边的空白,line表示一行输入，最终得到的inputs数组的每一个元素表示一行输入。
  inputs.push(line.trim());
  //下面再根据要求对每一行数据进行处理，比如类似于单行输入将每一行数据按照空格转换为数组等
    console.log(inputs)
})