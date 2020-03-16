// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
// 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：["bella","label","roller"]
// 输出：["e","l","l"]

// 示例 2：
// 输入：["cool","lock","cook"]
// 输出：["c","o"]
/**
 * @param {string[]} A
 * @return {string[]}
 */
// 暴力法
var commonChars = function(A) {
    // 先把A数组的第一项中的每个项与次数取出来，存到对象中，遍历A数组中接下来的每一项，如果有在对象中的，比较出现次数多少
    let obj = {};
    A[0].split('').forEach(item=>{
        if(obj.hasOwnProperty(item)){
            obj[item]++;
        }else{
           obj[item]=1;
        }
    })
    for(let i=1;i<A.length;i++){
        let obj2 = {};
        A[i].split('').forEach(item=>{
            if(obj2.hasOwnProperty(item)){
                obj2[item]++;
            }else{
               obj2[item]=1;
            }
        })
        Object.keys(obj).forEach(v=>{
            if(obj2[v]){
                obj[v] = Math.min(obj[v],obj2[v])
            }else{
                delete obj[v];
            }
        })
    }
    let arr = [];
    for(let i in obj){
        for(let j=0;j<obj[i];j++){
            arr.push(i)
        }
    }
    return arr;
};
// 优化
var commonChars = function(A) {
    let res = A[0].split('');
    for(let i=1;i<A.length;i++){
        let temp = A[i].split('');
        res = res.filter(item=>{
            return temp.indexOf(item)==-1?false:temp[temp.indexOf(item)]=1
        })
    }
    return res;
};
var A = ["bella","label","roller"];
console.log(commonChars(A));