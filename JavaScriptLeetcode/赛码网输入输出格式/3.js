// 现在一共有n个任务可以完成。对于每个任务，都有k个子任务可以做。并且第 i 个子任务需要花费的时间是 ti 。
// 我们可以认为一个子任务需要的时间只和这个子任务是第几个子任务有关，而不和这是属于哪个任务有关。
// 也就是说n个任务的第 i 个子任务需要的时间都是一样的。

// 每个任务都只可以完成一次，同时每个子任务也只能完成一次，任何任务都不能重复完成。

// 每当你完成一个子任务你会获得p分，而当你完成一个任务的k个子任务后，你会获得额外的q分，也就是说你会获得pk+q分。

// 现在你一共有m的时间，你需要求出最大的得分。
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
    list.push(arr)
    if(count==3){
        let c = solveMeFirst(list);
        process.stdout.write('' + c + '\n');
        count = 0;
    }
});
var solveMeFirst = function(list){
    let numlist = list[0].split(' ');
    let n = parseInt(numlist[0]) // n个任务
    let k = parseInt(numlist[1]) // k个子任务
    let m = parseInt(numlist[2]) // m个时间
    let numlist2 = list[1].split(' ');
    let p = parseInt(numlist2[0]) // 完成一个子任务获得p分
    let q = parseInt(numlist2[1]) // 额外的q分
    let numlist3 = list[2].split(' '); // 每个子任务的得分
    let fenshu = numlist3;
    let array = new Array();
    array[0] = new Array();
    array[1] = new Array()
    array[0][0] = 0
    for(let i=0;i<n;i++){
        for(let j=0;j<k;j++){
           array[i][j] = parseInt(fenshu[j])
        }
    }

    console.log(array)
}
var list = ['3 2 8','3 1','9 5']
console.log(solveMeFirst(list))