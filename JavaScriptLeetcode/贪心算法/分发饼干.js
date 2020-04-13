// 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。
// 但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i ，都有一个胃口值 gi ，
// 这是能让孩子们满足胃口的饼干的最小尺寸；
// 并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，
// 我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function(g, s) {
//     g.sort((a,b)=>{
//         return a-b;
//     })
//     s.sort((a,b)=>{
//         return a-b;
//     })
//     let count = 0;
//     for(let item of g){
//         let flag = false;
//         for(let i=0;i<s.length;i++){
//             if(s[i]>=item){
//                 s.splice(i,1);
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count;
// };
var findContentChildren = function(g, s) {
    g.sort((a,b)=>{
        return a-b;
    })
    s.sort((a,b)=>{
        return a-b;
    })
    let glen = g.length;
    let slen = s.length;
    let gindex=0,sindex=0,count=0;
    while(gindex<glen && sindex<slen){
        if(g[gindex]<=s[sindex]){
            count++;
            gindex++;
            sindex++;
        }else{
            sindex++;
        }
    }
    return count;
};
var g = [1,2], s = [1,2,3];
console.log(findContentChildren(g,s));