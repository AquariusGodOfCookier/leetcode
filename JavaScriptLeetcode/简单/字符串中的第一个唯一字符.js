// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。
// 如果不存在，则返回 -1。
// 字符串中的第一个唯一字符
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function (s) {
//     let map = new Map();
//     for(let i=0;i<s.length;i++){
//         if(map.has(s[i])){
//             map.set(s[i],-1)
//         }else{
//             map.set(s[i],i)
//         }
//     }
//     let list = [...map.values()].sort((a,b)=>{
//         return a-b;
//     })
//     for(let i=0;i<list.length;i++){
//         if(list[i]!=-1){
//             return list[i]
//         }
//     }
//     return -1;
// };
var firstUniqChar = function (s) {
   for(let i=0;i<s.length;i++){
       if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       }
   }
   return -1;
};
var s = "loveleetcode";
console.log(firstUniqChar(s))