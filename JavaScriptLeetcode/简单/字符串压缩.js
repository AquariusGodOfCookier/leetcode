// 字符串压缩
// 字符串压缩。利用字符重复出现的次数，编写一种方法，
// 实现基本的字符串压缩功能。
// 比如，字符串aabcccccaaa会变为a2b1c5a3。
// 若“压缩”后的字符串没有变短，则返回原先的字符串。
// 你可以假设字符串中只包含大小写英文字母（a至z）。
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(s) {
    let count = 1;
    let str = '';
    for(let i=0;i<=s.length-1;i++){
        if(s[i]!=s[i+1]){
            str+=s[i]+count;
            count = 1;
        }else{
            count +=1;
        }
    }
    return str.length>=s.length?s:str;

};
var S = 'bb';
console.log(compressString(S));