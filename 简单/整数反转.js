/**
 * @param {number} x
 * @return {number}
 */
var x = 1230;
var INT_MAX = Math.pow(2, 31) - 1;
var INT_MIN = Math.pow(-2, 31);
var reverse = function (x) {
    let numberArr = [];
    let numberStr = '';
    if (x < 0) {
        x = Math.abs(x);
        numberStr = '-';
    } else if (x == 0) {
        return 0;
    } else {
        numberStr = '';
    }
    while (x > 0) {
        numberArr.push(x % 10);
        x = Math.floor(x / 10);
    }
    numberArr.forEach(item => {
        numberStr += item;
    })
    numberStr = Number(numberStr)
    if(numberStr>INT_MAX || numberStr<INT_MIN){
        return 0;
    }
    return numberStr;

}
console.log(reverse(x));