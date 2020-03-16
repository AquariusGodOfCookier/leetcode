/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let num = 0;
//     let count = digits.length-1;
//     digits.forEach(item=>{
//         console.log(item,Math.pow(10,count))
//         num += item* (Math.pow(10,count))
//         console.log(num)
//         count--;
//     })
//     console.log(num)
//     num++;
//     let numarr = String(num).split('').map((item)=>{
//         return parseInt(item,10)
//     });
//     console.log(numarr)
// };
var plusOne = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    digits = [...Array(len + 1)].map(_ => 0);
    digits[0] = 1;
    return digits;
}
var digits = [9];
console.log(plusOne(digits));