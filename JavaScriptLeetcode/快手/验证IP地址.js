
var cmd = require('node-stdio');
function start(){
    var input = cmd.read_line();
    if(IPV4(input)){
        return 'IPV4'
    }else if(IPV6(input)){
        return 'IPV6';
    }else{
        return 'Neither';
    }
    
}
var IPV4 = function(str){
    let strList = str.split('.');
    let boolean;
    if(strList.length!=4){
        boolean= false;
    }
    strList.forEach(item=>{
        if(item[0]>'0'&&item[0]<'9'){
            let numStr = parseInt(item,10);
            if(numStr>0&&numStr<=255){
                boolean = true;
            }else{
                boolean = false;
            }
        }else{
            boolean = false;
        }
    })
    return boolean;
}
var IPV6 = function(str){
    let strList = str.split(':');
    let boolean = true;
    strList.forEach(item=>{
        if(item=='' || item.length>4){
            boolean = false;
        }
        let str = parseInt(item,16);
        if(item.length>1&&str==0){
            boolean = false;
        }
    })
    return boolean;
}
console.log(start());
// console.log(start())
// var str = '2001:0db8:85a3:01:0:8A2E:0370:7334';
// console.log(IPV6(str))
