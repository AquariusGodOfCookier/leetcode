
var cmd = require('node-stdio');
function start(){
    let numList = new Array();
    var input = cmd.readInt();
    for(let i=0;i<input;i++){
        numList.push(cmd.read_line())
    }
    let newarr = execution(numList);
    newarr.forEach(item=>{
        item.forEach(a=>{
            cmd.printsth(a,'')
        })
        cmd.printsth('\n')
    })
    
}
function execution(numList){
    let obj = [];
    let newarr = [];
    numList.forEach(item=>{
        let b = [];
        let arr = item.trim().split(' ');
        for(let i=0;i<arr.length;i++){
            arr[i] = Number(arr[i]);
            if(arr[i]!='0'){
                if(arr[i]==arr[i+1]){
                    arr[i+1] = Number(arr[i+1])+arr[i];
                    arr[i]=0;
                }
            }
            newarr.push(arr[i])
        }
        for(let i=0;i<newarr.length;i++){
            if(newarr[i]!=0){
                b.push(newarr[i])
            }
        }
        if(b.length<newarr.length){
            for(let i = b.length;i<newarr.length;i++){
                b.push(0)
            }
        }
        obj.push(b);
        newarr = []
    })
    return obj;
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