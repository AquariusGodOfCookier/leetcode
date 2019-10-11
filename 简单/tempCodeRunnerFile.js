/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    for(let i=0;i<32;i++){
        console.log(n&1)
    }
    console.log(n)
};

var binary = 00000010100101000001111010011100;

console.log(reverseBits(binary));