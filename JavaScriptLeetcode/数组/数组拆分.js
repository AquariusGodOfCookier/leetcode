// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对,
//  例如 (a1, b1), (a2, b2), ..., (an, bn) ，使
//  得从1 到 n 的 min(ai, bi) 总和最大。
// 数组拆分
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    let arr = [];
    let index = 0;
    let list = [];
    for(let i=0;i<nums.length;i++){
        list.push(nums[i]);
        index += 1;
        if(index %2 == 0){
            arr.push(Math.min.apply(Math,list));
            list = [];
        }
    }
    return arr.reduce((prev,curr)=>{
        return prev+curr
    });
};
var nums = [1,4,3,2];
console.log(arrayPairSum(nums))