//  二进制求和
//  给定两个二进制字符串，返回他们的和（用二进制表示）。

//  输入为非空字符串且只包含数字 1 和 0。
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let count = 0;
    let str = '';
    let len = Math.max(a.length,b.length);
    a = a.padStart(len,'0');
    b = b.padStart(len,'0');
    for(let i=len-1;i>=0;i--){
        let sum = count;
        sum += parseInt(a[i])+parseInt(b[i]);
        str += sum%2;
        count = Math.floor(sum/2)
    }
    str += count ==1 ? 1 : '';
    return str.split('').reverse().join('');
};
var a = '1010',b='1011';
console.log(addBinary(a,b));
