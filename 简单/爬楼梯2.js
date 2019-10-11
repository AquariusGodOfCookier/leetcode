/**
 * @param {number} n
 * @return {number}
 */
// 使用递归，斐波那契额数列，但是会超时
var climbStairs = function(n) {
    if(n<=0){
        return 0;
    }else if(n<=3){
        return n;
    }else {
        return climbStairs(n-1)+climbStairs(n-2);
    }
};
var climbStairs = function(n){
    let arr = [];
    if(n<=0){
        return 0;
    }else if(n<=3){
        return n;
    }else{
        arr[1] = 1;
        arr[3] = 3;
        arr[2] = 2;
        for(let i=4;i<=n;i++){
            arr[i] = arr[i-1]+arr[i-2];
        }
        return arr[n];
    }
}
var climbStairs = function(n){
    let arr ={
        1:1,
        2:2,
        3:3
    }
    for(let i=4;i<=n;i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr[n];
}
var n = 5;
console.log(climbStairs(n));