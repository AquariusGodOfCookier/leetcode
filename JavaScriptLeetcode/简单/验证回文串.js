// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，
// 可以忽略字母的大小写。
// 验证回文串
/**
 * @param {string} s
 * @return {boolean}
 */
// 正则表达式匹配
// var isPalindrome = function(s) {
//     let str = s.replace(/[^0-9a-zA-Z]/g,'').toLocaleLowerCase().split('');
//     return str.join('') == str.reverse().join('')
// };

// 双指针匹配
var isPalindrome = function(s){
    let str = s.replace(/[^0-9a-zA-Z]/g,'').toLocaleLowerCase();
    let leftIndex = 0;
    let rightIndex = str.length-1;
    while(leftIndex<rightIndex){
        if(str[leftIndex]!=str[rightIndex]){
            return false
        }else{
            leftIndex++;
            rightIndex--;
        }
    }
    return true;
}
var s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s))