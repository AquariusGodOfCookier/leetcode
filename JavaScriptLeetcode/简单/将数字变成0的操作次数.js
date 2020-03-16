// 给你一个非负整数 num ，
// 请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，
// 你需要把它除以 2 ；否则，减去 1 。
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0
    while(num!=0){
        if(num%2==0){
            // console.log(`步骤${count+1},${num}是偶数，除以2得到${num/2}`)
            num = num/2;
            count = count+1
        }else{
            // console.log(`步骤${count+1},${num}是奇数，减1得到${num-1}`)
            num = num-1;
            count = count+1
        }
    }
    return count
};
var num = 123;
console.log(numberOfSteps(num))