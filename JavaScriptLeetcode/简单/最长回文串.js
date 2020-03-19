
// 给定一个包含大写字母和小写字母的字符串，
// 找到通过这些字母构造成的最长的回文串。

// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = 0;
    let map = new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }else{
            map.set(s[i],1);
        }
    }
    let isHaveSingle = false;
    for(let [key,value] of map.entries()){
        if(value%2==0){
            count += value
        }else{
            count += value-1;
            isHaveSingle = true
        }
    }
    return isHaveSingle?count+1:count;
};
var s = 'abccccdd';
console.log(longestPalindrome(s))