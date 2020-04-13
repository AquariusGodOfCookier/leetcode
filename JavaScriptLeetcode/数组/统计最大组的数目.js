// 统计最大组的数目
// 给你一个整数 n 。请你先求出从 1 到 n 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。

// 请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let map = new Map();
    for(let i=1;i<=n;i++){
        let number = 0;
        let stri =String(i).split('');
        let sum = stri.reduce((pre,cur)=>{
            return parseInt(pre)+parseInt(cur);
        },0);
        map.set(sum,map.has(sum)?map.get(sum)+1:1);
    }
    let values = [...map.values()];
    values.sort((a,b)=>{
        return b-a;
    })
    let max = values[0];
    let count = 0;
    for(let i=0;i<values.length;i++){
        if(max==values[i]){
            count++;
        }else{
            break;
        }
    }
   return count;

};
var n = 24;
console.log(countLargestGroup(n));