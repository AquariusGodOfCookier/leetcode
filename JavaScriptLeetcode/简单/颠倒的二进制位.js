/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        ans = (ans << 1) + (n & 1)
        n >>= 1
    }
    return ans >>> 0
};

var reverseBits  =function(n){
    return parseInt(n.toString(2).padStart(32,'0').split('').reverse().join(''),2)
}

var binary = 00000000000000000000000000001011;

console.log(reverseBits(binary));