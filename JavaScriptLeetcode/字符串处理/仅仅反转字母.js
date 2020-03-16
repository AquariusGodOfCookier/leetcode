//给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
//输入："a-bC-dEf-ghIj"
//输出："j-Ih-gfE-dCba"
/**
 * @param {string} S
 * @return {string}
 */
// （ascii < 65) || (ascii > 90 && ascii < 97 不进行交换的字母的ascii
var reverseOnlyLetters = function (S) {
    S = S.split('')
    let len = S.length;
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        let leftascil = S[left].charCodeAt();
        let rightascil = S[right].charCodeAt();
        if ((leftascil<65)||(leftascil<97&&leftascil>90)) {
            left++;
        }
        else if ((rightascil<65)||(rightascil<97&&rightascil>90)) {
            right--;
        }else{
            let temp = S[left];
            S[left] = S[right];
            S[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return S.join('');
};
var S = "z<*zj";
console.log(reverseOnlyLetters(S));