var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});
rl.prompt();

let count = 0;
let list = []
rl.on('line', function (data) {
    count++
    let arr = data;
    if(count==2 || count == 3){
        list.push(arr)
    }
    if(count==3){
        let c = solveMeFirst(list[0],list[1]);
        process.stdout.write('' + c + '\n');
        count = 0;
    }
});
var solveMeFirst = function(a,b){
    alist = a.split(' ').sort((a,b)=>b-a)
    blist = b.split(' ').sort((a,b)=>b-a)
    let maxa = parseInt(alist[0])+parseInt(alist[1])+parseInt(alist[2])
    let maxb = parseInt(blist[0])+parseInt(blist[1])+parseInt(blist[2])
    return Math.max(maxa,maxb)
}
