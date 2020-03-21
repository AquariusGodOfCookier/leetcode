// 给出一个长度为n的由正整数构成的序列，你需要从中删除一个正整数，很显然你有很多种删除方式，
// 你需要对删除这个正整数以后的序列求其最长上升子串，请问在所有删除方案中，最长的上升子串长度是多少。

// 这里给出最长上升子串的定义：即对于序列中连续的若干个正整数，满足a_{i+1}>a_i，
// 则称这连续的若干个整数构成的子串为上升子串，在所有的上升子串中，长度最长的称为最长上升子串。

var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});
rl.prompt();

let count = 0;
rl.on('line', function (data) {
    count++
    let arr = data;
    if(count==2){
        let c = solveMeFirst(arr);
        process.stdout.write('' + c + '\n');
        count = 0;
    }
});
var solveMeFirst = function(nums){
    let numsList = []
     nums.split(' ').forEach(item=>{
        numsList.push(parseInt(item))
    });
    let len = numsList.length;
    if(len<=1){
        return len;
    }
    let newNums = new Array(len).fill(1);
    for(let i=1;i<len;i++){
        for(let j=0;j<i;j++){
            if(numsList[i]>numsList[j]){
                newNums[i] = Math.max(newNums[i],newNums[j]+1)
            }else{
                newNums[i] = Math.max(newNums[i],1)
            }
        }
    }
    newNums.sort((a,b)=>{
        return b-a;
    })
    return newNums[0]
}