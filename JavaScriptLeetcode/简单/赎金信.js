// 赎金信
// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
// 判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
// 如果可以构成，返回 true ；否则返回 false。

// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，
//     组成单词来表达意思。)

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for(let i=0;i<magazine.length;i++){
        if(map.has(magazine[i])){
            map.set(magazine[i],map.get(magazine[i])+1)
        }else{
            map.set(magazine[i],1)
        }
    }
    for(let i=0;i<ransomNote.length;i++){
        if(map.has(ransomNote[i]) && map.get(ransomNote[i])>0){
            map.set(ransomNote[i],map.get(ransomNote[i])-1);
        }else{
            return false;
        }
    }
    return true
};
var canConstruct = function(ransomNote, magazine) {
    let charList = new Array(26).fill(0)
    for(let i=0;i<magazine.length;i++){
        charList[magazine[i].charCodeAt()-'a'.charCodeAt()] += 1
    }
    for(let i=0;i<ransomNote.length;i++){
        charList[ransomNote[i].charCodeAt()-'a'.charCodeAt()] -= 1
    }
    for(let i=0;i<charList.length;i++){
        if(charList[i]<0){
            return false
        }
    }
    return true
};
var canConstruct = function(ransomNote, magazine) {
    for(let i=0;i<ransomNote.length;i++){
        if(magazine.indexOf(ransomNote[i])!=-1){
            magazine = magazine.replace(ransomNote[i],'')
        }else{
            return false
        }
    }
    return true
};
var ransomNote = "aabb"
var magazine = "ab"
console.log(help(ransomNote, magazine));