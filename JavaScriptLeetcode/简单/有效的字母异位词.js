// 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     return s.split('').sort().join() == t.split('').sort().join()
// };
// 哈希表映射
var isAnagram = function(s,t){
    if(s.length!=t.length){
        return false;
    }
    let hash = new Array(26).fill(0);
    let index = 'a'.charCodeAt();
    for(let i=0;i<s.length;i++){
        hash[s[i].charCodeAt()-index]++;
        hash[t[i].charCodeAt()-index]--;
    }
    for(let i=0;i<hash.length;i++){
        if(hash[i]!=0){
            return false
        }
    }
    return true;
}
var s = "rat", t = "cat";
console.log(isAnagram(s,t))