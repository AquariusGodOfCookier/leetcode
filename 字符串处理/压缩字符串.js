/**
 * @param {Array} chars
 * @return {Number}
 */
// 直接返回这个数组，新开一个数组存储
var compress = function(chars) {
    chars.sort();
    let obj = {};
    chars.forEach((element)=>{
        if(obj.hasOwnProperty(element)){
            obj[element] = obj[element]+1;
        }else{
            obj[element] = 1;
        }
    })
    chars = [];
    for(let i in obj){
        chars.push(i);
        chars.push(obj[i])
    }
    return chars;
};
// 原地算法压缩，原地修改数组，返回数组的新长度
// var compress = function (chars) {
//     var len = chars.length
//     for (var i = 0, j = 0; j < len;) {
//       chars[i] = chars[j]
//       var temp = j
//       while (j < len && chars[i] === chars[j]) {
//         j++
//       }
//       i++
//       var dis = j - temp
//       if (dis > 1) {
//         var distance = Array.from('' + dis)
//         for (var k = 0; k < distance.length; k++) {
//           chars[i++] = distance[k]
//         }
//       }
  
//     }
//     return i
//   }
var chars = ["a","a","b","b","c","c","c"];
console.log(compress(chars));