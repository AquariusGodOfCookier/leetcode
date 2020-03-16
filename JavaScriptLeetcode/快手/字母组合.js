
var cmd = require('node-stdio');
function start(){
    var input = cmd.read_line();
    let obj = {
        1:'',
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z'],
    }
    let newstr = input.split('').map((i)=>{
        return parseInt(i,10);
    })
    newstr.forEach((item,index)=>{
        if(item==1){
            newstr = newstr.splice(1);
        }
    })
    let len = newstr.length;
    if(len==0){
        return [];
    }
    let total = obj[newstr[0]];
    let newlist = [];
    newstr.shift();
    while(newstr.length>0){
        total.forEach((item)=>{
            obj[newstr[0]].forEach((j)=>{
                newlist.push(item+j);
            })
            total = newlist;
        })
        newstr.shift();
    }
    let OMG = []
    total.forEach(item=>{
        if(item.length==len){
            OMG.push(item)
        }
    })
     return OMG;
}
console.log(start());
// console.log(start())
// var str = '2001:0db8:85a3:01:0:8A2E:0370:7334';
// console.log(IPV6(str))
