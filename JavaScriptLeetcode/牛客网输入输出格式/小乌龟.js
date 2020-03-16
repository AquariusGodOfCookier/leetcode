// FFT
// 1

var fun = function(str,num){
    let count = 0;
    let arr = new Array(num);
    arr[0] = str;
    let a = '';
    for(let i=1;i<num;i++){
        arr[i-1].split('').forEach(i=>{
            if(i=='F'){
                i='T';
            }else if(i=='T'){
                i='F';
            }
            a+=i;
        })
        arr[i]=a;
        a='';
     }
     arr = arr.join('');
    
     arr.split('').forEach(item=>{
         if(item=='F'){
             count +=1;
         }else if(item=='T'){
             count -=1;
         }
     })
    console.log(count)
}
var str = 'FFT';
var num = 1;
console.log(fun(str,num));