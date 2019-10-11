/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len = Math.max(num1.length,num2.length);
    num1 = num1.padStart(len,'0');
    num2 = num2.padStart(len,'0');
    let num1list = num1.split('').map(i=>parseInt(i,10));
    let num2list = num2.split('').map(i=>parseInt(i,10));
    let num3 = [];
    while(num1list.length>0 || num2list.length>0){
        num3.unshift(num1list.pop()+num2list.pop())
    }
    let target = 0;
    for(let i=num3.length-1;i>=0;i--){
        num3[i] = num3[i]+target;
        target = 0
        if(num3[i]>=10){
            num3[i] = num3[i]-10;
            target=target+1;
        }else{
            target = 0;
        }
    }
    if(target>0){
        num3.unshift(target)
    }
    return num3.join('');
};
var num1 = '9';
var num2 = '99';
console.log(addStrings(num1,num2));