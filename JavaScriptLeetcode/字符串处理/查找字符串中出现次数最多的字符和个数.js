/**
 * @param {String} str
 * @return {Object} key:字符,value:次数
 */

 var showLargestChars = function(str){
    str = str.split('').sort().join('');
    let num = 0;
    let obj = {};
    let char = '';
    let reg = /(\w)\1+/g
    str.replace(reg,($0,$1)=>{
        if(num < $0.length){
            num = $0.length;
            char = $1;
        }
    })
    obj[char] = num;
    return obj;
 }
 var str = 'asdddddddbbbsssssssssssss';
 console.log(showLargestChars(str));