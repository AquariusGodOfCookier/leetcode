// 配对交换
// 配对交换。编写程序，交换某个整数的奇数位和偶数位，
// 尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。
/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
    let evenNum = num & 0xaaaaaaaa;
    let oddNum = num & 0x55555555;
    evenNum >>= 1;
    oddNum <<= 1;
    return evenNum|oddNum;
};
var num = 2;
console.log(exchangeBits(num));