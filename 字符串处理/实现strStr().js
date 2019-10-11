/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var haystack = 'mississippi';
var needle = 'issip';
// 会超时，暴力解法在解大数据的时候会超时
// var strStr = function(haystack, needle) {
//     if(needle==''){
//         return 0;
//     }
//     let str = '';
//     let index = 0;
//     for(let i=0;i<haystack.length;i++){
//         while(haystack[i+index]==needle[index]){
//             str += haystack[i+index];
//             index++;
//             console.log(i,str)
//             if(str==needle){
//                 return i;
//             }
//         }
//         str = '';
//         index = 0;
//     }
//     return -1;
// };

// kmp算法
// var strStr = function(haystack, needle) {
//     if(needle==''){
//         return 0;
//     }
// };
var strStr = function(haystack, needle){
    if (needle==="") return 0
    for(var i=0;i<haystack.length;i++){
        if(haystack[i]===needle[0]){
            var flag = true;
            for (var j=1;j<needle.length;j++){
                if (haystack[i+j]!=needle[j]){
                    flag = false
                    break;
                }
            }
            if (flag) return i
        }
    }
    return -1
};

function kmpGetStrPartMatchValue(str) {
    var prefix = [];
    var suffix = [];
    var partMatch = [];
    for (var i = 0, j = str.length; i < j; i++) {
        var newStr = str.substring(0, i + 1);
        console.log(newStr)
        if (newStr.length == 1) {
            partMatch[i] = 0;
        } else {
            for (var k = 0; k < i; k++) {
                //取前缀
                prefix[k] = newStr.slice(0, k + 1);
                suffix[k] = newStr.slice(-k - 1);
                if (prefix[k] == suffix[k]) {
                    partMatch[i] = prefix[k].length;
                }
            }
            if (!partMatch[i]) {
                partMatch[i] = 0;
            }
        }
    }
    return partMatch;
}



function KMP(sourceStr, searchStr) {
    //生成匹配表
    var part = kmpGetStrPartMatchValue(searchStr);
    var sourceLength = sourceStr.length;
    var searchLength = searchStr.length;
    var result;
    var i = 0;
    var j = 0;

    for (; i < sourceStr.length; i++) { //最外层循环，主串

        //子循环
        for (var j = 0; j < searchLength; j++) {
            //如果与主串匹配
            if (searchStr.charAt(j) == sourceStr.charAt(i)) {
                //如果是匹配完成
                if (j == searchLength - 1) {
                    result = i - j;
                    break;
                } else {
                    //如果匹配到了，就继续循环，i++是用来增加主串的下标位
                    i++;
                }
            } else {
                //在子串的匹配中i是被叠加了
                if (j > 1 && part[j - 1] > 0) {
                    i += (i - j - part[j - 1]);
                } else {
                    //移动一位
                    i = (i - j)
                }
                break;
            }
        }

        if (result || result == 0) {
            break;
        }
    }


    if (result || result == 0) {
        return result
    } else {
        return -1;
    }
}

var s = "BBC ABCDAB ABCDABCDABDE";
var t = "ABCDABD";


console.log(KMP(s,t))
// console.log(strStr(haystack, needle));