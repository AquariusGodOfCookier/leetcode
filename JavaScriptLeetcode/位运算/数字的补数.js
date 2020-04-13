// 数字的补数
// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let temp = 1;
    while(temp<num){
        temp <<= 1;
        temp += 1;
    }
    return temp ^ num;
};
var num = 5;
console.log(findComplement(num));