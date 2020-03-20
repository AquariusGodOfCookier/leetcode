// 字符串轮转

// 字符串轮转。给定两个字符串s1和s2，
// 请编写代码检查s2是否为s1旋转而成
// （比如，waterbottle是erbottlewat旋转后的字符串）。
// 轮转后的字符串一定在s1+s1中
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
    if(s1.length!=s2.length){
        return false;
    }
    s1 = s1+s1;
    return s1.indexOf(s2)==-1?false:true
};
var s1 = 'waterbottle'
var s2 = 'erbottlewat'
console.log(isFlipedString(s1,s2))