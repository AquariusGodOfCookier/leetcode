// 1 使用set
// var unique = function (nums) {
//     return Array.from(new Set([...nums]))
// }

// 2 使用新数组，包括indexof,map,hasownproperty,includes,sort
// map ,hasOwnProperty 与includes相似
// var unique = function (nums) {
//     let newNums = [];
//     for(let i=0;i<nums.length;i++){
//         if(!newNums.includes(nums[i])){
//             newNums.push(nums[i])
//         }
//     }
//     return newNums
// }
// 3 filter
var unique = function(nums){
    return nums.filter(function(item,index,nums){
        return nums.indexOf(item,0) === index;
    })
}

var nums = [1, 2, 3, 45, 3, 2, 1]
console.log(unique(nums))