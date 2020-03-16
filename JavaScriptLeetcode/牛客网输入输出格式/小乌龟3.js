// FFT
// 1

var fun = function(str,num){
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
        console.log(str);
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
var str = 'FFT';
var num = 2;
console.log(fun(str,num));