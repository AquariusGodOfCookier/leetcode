
/**
 *  @param {number[]} height
 *  @return {number}
 */

 var array = [1,8,6,2,5,4,8,3,7]
 var maxArea = function(height){

    let left = 0;
    let right = height.length-1;
    let max = 0;
    while(left<right){
        max = Math.max(max,Math.min(height[left],height[right])*(right-left));
        if(height[left]>=height[right]){
            right--;
        }else{
            left++;
        }
    }
    return max

 }

console.log( maxArea(array));