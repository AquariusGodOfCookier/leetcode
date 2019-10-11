/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead. 原地修改数组
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length-1;
    while(left<=right){
        let temp = '';
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};
var reverseString = function (s) {
    return s.reverse();
};
var s = ["H","a","n","n","a","h"];
console.log(reverseString(s));