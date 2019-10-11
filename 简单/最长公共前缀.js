/**
 * @param {string []} strs
 * @return {string} 
 */

var strs = ["dog","racecar","car"];
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (var j = 0; j < strs[i].length && j < ans.length; j++) {
            if (ans[j] != strs[i][j]) {
                break;
            }
        }
        ans = ans.substr(0, j)
    }
    if (ans == '') {
        return ''
    } else {
        return ans
    }
}

console.log(longestCommonPrefix(strs))