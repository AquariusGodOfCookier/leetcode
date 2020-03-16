/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let list = {
        1:1,
        2:2,
        3:3
    }
    for(let i=4;i<=n;i++){
        list[i] = list[i-1]+list[i-2]
    }
    return list[n];
};

//超时
var climbStairs = function(n) {
    if(n<=3){
        return n;
    }else{
        return climbStairs(n-1)+climbStairs(n-2);
    }
};
// var num = 4;
console.log(climbStairs(num));