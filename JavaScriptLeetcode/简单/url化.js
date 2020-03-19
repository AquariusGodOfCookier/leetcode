// URL化。编写一种方法，将字符串中的空格全部替换为%20。
// 假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。
// （注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）
// url化
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(s, length) {
    let str = '';
    for(let i=0;i<length;i++){
        str += s[i]==' '?'%20':s[i]
    }
    return str
};
var s = "Mr John Smith    "
var length = 13;
console.log(replaceSpaces(s,length))