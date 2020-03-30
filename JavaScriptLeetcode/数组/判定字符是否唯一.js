// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
/**
 * @param {string} astr
 * @return {boolean}
 */
// 判定字符是否唯一
// var isUnique = function(astr) {
//     let map = new Map();
//     for(let i=0;i<astr.length;i++){
//         if(map.has(astr[i])){
//             return false;
//         }
//         map.set(astr[i],1);
//     }
//     return true;
// };
var isUnique = function(astr) {
    let list = new Array(26).fill(0);
    for(let i=0;i<astr.length;i++){
        if(list[astr[i].charCodeAt()-'a'.charCodeAt()]==1){
            return false;
        }
        list[astr[i].charCodeAt()-'a'.charCodeAt()]+=1;
    }
    return true;
};
var astr = "leetcode";
console.log(isUnique(astr));