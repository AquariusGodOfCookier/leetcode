/**
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
 * 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var obj = new Set();
var isHappy = function (n) {
    let arr = numberChangeArr(n);
    let count = 0;
    arr.forEach(item => {
        count += Math.pow(item, 2)
    })
    if (count == 1) {
        return true;
    } else {
        if (obj.has(count)) {
            return false;
        } else {
            obj.add(count);
            return isHappy(count);
        }
    }
};
var numberChangeArr = function (number) {
    let arr = number.toString().split('').map((i) => {
        return parseInt(i, 10);
    })
    return arr;
}
var num = 19;
console.log(isHappy(num));