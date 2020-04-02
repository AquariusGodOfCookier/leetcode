var isDoller = function(str){
    var reg = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return reg.test(str)
}
// 以 $ 开始

// 整数部分，从个位起，满 3 个数字用 , 分隔

// 如果为小数，则小数部分长度为 2 
var str = "$123,123.00";
console.log(isDoller(str))