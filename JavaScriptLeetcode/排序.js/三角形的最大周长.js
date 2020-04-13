// 三角形的最大周长
// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

// 如果不能形成任何面积不为零的三角形，返回 0。
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a,b)=>{
        return b-a;
    })
    for(let i=2;i<A.length;i++){
        if(isTriangle(A[i],A[i-1],A[i-2])){
            return A[i]+A[i-1]+A[i-2];
        }
    }
    return 0;
};
var isTriangle = function(a,b,c){
    console.log(a,b,c);
    if(a+b>c && a+c>b && c+b>a){
        return true;
    }
    return false;
}
var A =[3,6,2,3]
console.log(largestPerimeter(A));