// 分割平衡字符串
// 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

// 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

// 返回可以通过分割得到的平衡字符串的最大数量。
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let sum = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='L'){
            count -= 1;
        }else if(s[i]=='R'){
            count += 1;
        }
        if(count == 0){
            sum += 1;
        }
    }
    return sum;
};
var s = 'LLLLRRRR';
console.log(balancedStringSplit(s))