// 字符串中的单词数
// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

// 请注意，你可以假定字符串里不包括任何不可打印的字符。
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = s[0]==' ' || s[0]==undefined?0:1;
    for(let i=1;i<s.length;i++){
        if(s[i]!=' ' && s[i-1] == ' '){
            count += 1;
        }
    }
    return count
};
console.log(countSegments(s))