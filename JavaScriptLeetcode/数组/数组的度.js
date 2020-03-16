// 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
// 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
// 示例 1:
// 输入: [1, 2, 2, 3, 1]
// 输出: 2
// 解释: 
// 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
// 连续子数组里面拥有相同度的有如下所示:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组[2, 2]的长度为2，所以返回2。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // 先求数组中每个元素出现的次数
    let obj = {};
    nums.forEach((item,index)=>{
        if(obj.hasOwnProperty(item)){
            obj[item][0]++;
            obj[item][2] = index;
        }else{
            obj[item] = [1,index,index]; //存一个数组，第一位为次数，第二位为第一次出现的index，第三位为最后一次出现的index
        }
    })
    let count = 0;
    let len = 0;
    for(let i in obj){
        if(obj[i][0]>count){
            count = obj[i][0];  // 这么比较是找到那个度
            len = obj[i][2] - obj[i][1]+1; //找到最短子数组
        }else if(obj[i][0]==count){
            len = Math.min(len,obj[i][2] - obj[i][1]+1)
        }
    }
    return len;
};
var nums = [1,3,2,2,3,1];
console.log(findShortestSubArray(nums));