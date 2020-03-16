// FFT
// 1

var fun = function(str,num){
    str = str.split('');
    while(num>0){
        for(let i=0;i<str.length;i++){
            if(str[i]=='F'){
                str[i]='T';
            }else if(str[i]=='T'){
                str[i]='F';
            }
        }
        num--;
    }
    let count = 0;
    str.forEach(item=>{
        if(item=='F'){
            count+=1;
        }else if(item=='T'){
            count -=1;
        }
    })
    console.log(str,count)
}
var str = 'FFT';
var num = 1;
console.log(fun(str,num));