// 输入一个英文句子，翻转句子中单词的顺序，
// 但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
// 例如输入字符串"I am a student. "，
// 则输出"student. a am I"。
// 翻转单词顺序
/**
 * @param {string} s
 * @return {string}
 */
// 1 切割
var reverseWords = function(s) {
    let listS = s.split(' ');
    let str = ''
    for(let i=listS.length-1;i>=0;i--){
        str += listS[i]==''?listS[i]:listS[i]+' '
    }
    return str.substr(0,str.length-1)
};
var s = "a good   example"
console.log(reverseWords(s))