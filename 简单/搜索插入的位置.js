/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(nums[0]>target){
      return 0;
  }else{
      for(let i=0;i<nums.length;i++){
          if(nums[i]>=target){
              return  i;
          }
      }
      return nums.length
  }

};

console.log(searchInsert([1,3,5,6],3))