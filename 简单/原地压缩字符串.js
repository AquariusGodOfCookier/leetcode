// var compress = function (chars) {
//     var len = chars.length
//     for (var i = 0, j = 0; j < len;) {
//         chars[i] = chars[j]
//         var temp = j
//         while (j < len && chars[i] === chars[j]) {
//             j++
//         }
//         i++
//         var dis = j - temp
//         if (dis > 1) {
//             var distance = Array.from('' + dis)
//             for (var k = 0; k < distance.length; k++) {
//                 chars[i++] = distance[k]
//             }
//         }

//     }
//     return i
// }
var compress = function (chars) {
    if (chars === []) return 0
    str = chars.join("")
    var reg = /(.)\1{0,}/g
    var arr1 = str.match(reg)
    var len = arr1.length
    var newStr = ""
    var len1
    var arr2
    for (var i = 0; i < len; i++) {
        len1 = arr1[i].length
        arr2 = arr1[i].split("")
        if (len1 !== 1) {
            newStr = newStr + arr2[0] + len1
        } else {
            newStr = newStr + arr2[0]
        }
    }
    var newArr = newStr.split("")
    chars.splice(0, chars.length);
    for (var j = 0; j < newArr.length; j++) {
        chars[j] = newArr[j]
    }
    return chars.length
}
var chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));