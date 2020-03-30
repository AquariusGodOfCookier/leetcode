// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
// 卡牌分组
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map();
    for(let item of deck){
        map.set(item,map.has(item)?map.get(item)+1:1);
    }
    let arr = [...map.values()];
    let res = arr[0];
    return arr.every(i=>(res=gcd(res,i))>1);
};
let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
var deck = [1,2,3,4,4,3,2,1];
console.log(hasGroupsSizeX(deck));
