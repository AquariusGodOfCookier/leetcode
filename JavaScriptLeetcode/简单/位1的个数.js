/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let a = n.toString(2).split(''),num=0;
    a.map((i)=>{
        if(i>0){
            num++;
        }
    })
    return num;

};

var binary = 11;
console.log(hammingWeight(binary));