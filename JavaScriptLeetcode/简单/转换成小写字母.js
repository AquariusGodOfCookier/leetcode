// 转换成小写字母


// 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，
// 并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let a = 'A';
    let newstr = ''
    for(let i=0;i<str.split('').length;i++){
        if(str[i]>='A'&&str[i]<='Z'){
            str[i] += String.fromCharCode(str[i].charCodeAt()+32)
        }
    }
    return newstr
};

var str = "PiTAZ";
console.log(toLowerCase(str))