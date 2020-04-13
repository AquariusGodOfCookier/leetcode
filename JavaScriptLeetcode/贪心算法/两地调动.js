// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，
// 飞往 B 市的费用为 costs[i][1]。

// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=>{
        return (a[0]-a[1])-(b[0]-b[1]);
    })
    let n = costs.length/2;
    let Alist = costs.slice(0,n);
    let Blist = costs.slice(n);
    let cost = 0;
    for(let i=0;i<n;i++){
        cost += Alist[i][0]+Blist[i][1];
    }
    return cost;
};
var costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]];
console.log(twoCitySchedCost(costs));