
// 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，
// 那么整个数组都会变为升序排序。

// 你找到的子数组应是最短的，请输出它的长度。
//最短无序连续子数组
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let arr = [...nums];
    let startIndex = 0;
    let endIndex = 0;
    nums.sort((a,b)=>{
        return a-b;
    })
    let len = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=arr[i]){
            startIndex = i;
            break;
        }
        len++;
    }
    for(let j=nums.length-1;j>=0;j--){
        if(nums[j]!=arr[j]){
            endIndex = j;
            break;
        }
    }
    return len==nums.length?0:endIndex-startIndex+1;
};
var nums = [1,2,3,4];
console.log(findUnsortedSubarray(nums));