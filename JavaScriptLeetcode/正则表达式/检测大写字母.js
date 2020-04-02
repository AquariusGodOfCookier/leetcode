var detectCapitalUse = function(word) {
    // 正则表达式
    return /^[A-Z]*$/.test(word)|| /^[A-Z][a-z]*$/.test(word)||/^[a-z]*$/.test(word)
};
var s = 'USa';
console.log(detectCapitalUse(s));