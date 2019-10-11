var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
var inputArr = [];
rl.on('line', function(line){
    inputArr.push(line);
    if(inputArr.length==2){
        let str = inputArr[0];
        let nums = inputArr[1];
        fun(str,nums);
        inputArr=[]
    }

});
var fun = function(str,num){
    num = Number(num);
    str = str.split('');
    let isHaveT = false;
    let index=0;
    while(num>0){
        for(let i=0;i<str.length;i++){
            if(str[i]=='T'){
                isHaveT = true;
                str[i]='F';
                break;
            }
        }
        if(!isHaveT){
            str[index] ='T';
            index++;
            if(index>str.length){
                index=0;
            }
        }
        isHaveT = false;
        num--;
    }
    let count = 0;
    let go = 1;
    str.forEach(item=>{
        if(item=='F'){
            count+= go*1;
        }else if(item=='T'){
            go = -go;
        }
    })
    console.log(count)
}