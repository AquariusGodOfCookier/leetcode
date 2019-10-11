// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
// 示例:
// 输入: 3
// 输出: 5
// 解释:
// 给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    // 设G(n)为最后能组合成的搜索树,F(i)为以i为根组合成的搜索树
    // G(n) = F(1)+F(2)+...+F(n)
    // 当i为根元素时，左子树个数为i-1,右子树个数为n-i
    // F(i) = G(i-1)*G(n-i)
    // 组合G(n) = G(0)*G(n-1)+G(1)*G(n-2)+...G(n-1)*G(0)
    let G = new Array(n + 1);
    G[0] = 1;
    G[1] = 1;
    for(let i=2;i<G.length;i++){
        G[i]=0;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            G[i] += (G[j - 1] * G[i - j]);
        }
    }
    return G[n];
};
var n = 3;
console.log(numTrees(n));