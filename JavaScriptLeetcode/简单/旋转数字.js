// 旋转数字
// 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，
// 我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。

// 如果一个数的每位数字被旋转以后仍然还是一个数字， 
// 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；
// 2 和 5 可以互相旋转成对方；6 和 9 同理，
// 除了这些以外其他的数字旋转以后都不再是有效的数字。

// 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？
/**
 * @param {number} N
 * @return {number}
 */
var map = {
    '0':'0',
    '1':'1',
    '2':'5',
    '5':'2',
    '6':'9',
    '8':'8',
    '9':'6'
}
var rotatedDigits = function(N) {
    let count = 0
    for(let i=1;i<=N;i++){
        count = isDigits(i)?count+1:count;
    }
    return count;
};
var isDigits = function(i){
    var istr = String(i);
    var str = ''
    for(let i=0;i<istr.length;i++){
        if(map[istr[i]]){
            str += map[istr[i]]
        }else{
            return false;
        }
    }
    if(str != istr){
        return true
    }
    return false;
}

var N = 10;
console.log(rotatedDigits(N));