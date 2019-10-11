
var cmd = require('node-stdio');
function start(){
    let numList = new Array();
    var input = cmd.readInt();
    for(let i=0;i<input;i++){
        numList.push(cmd.readInt())
    }
    let a = execution(numList);
    cmd.printsth(a,'\n')
}
function execution(numList){
    let count = 0;
    let temp = 0;
    for(let i=0;i<numList.length;i++){
        if(numList[i+1]<numList[i]){
            temp = numList[i];
            numList[i] = numList[i+1];
            numList[i+1] = temp;
            count++;
        }
    }
   return count;
}
 start();
/**
 * 4
0 0 2 4
0 2 2 2
0 4 2 2
8 8 2 2
 */
/**
 * 2 4 0 0
4 2 0 0
4 4 0 0
16 4 0 0
 */