var breakNumber = function (nums) {
    nums = nums.split(' ').map(item => {
        return parseInt(item);
    })
    let count = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i + 1] >= nums[i]) continue;
        let temp = Math.floor((nums[i] - 1) / nums[i + 1]);
        count += temp;
        nums[i] /= (temp + 1);
    }
    return count;
}
// var breakNumber = function(list){
//     list = list.split(' ').map(item=>{
//         return parseInt(item);
//     })
//     let count = 0;
//     let stack = [];
//     for(let i=list.length-1;i>=0;i--){
//         if(stack.length>0 && stack[stack.length-1]<list[i]){
//             let t = Math.floor((list[i]-1)/stack[stack.length-1]);
//             count += t;
//             stack.push(list[i]/(t+1));
//             continue;
//         }
//         stack.push(list[i]);
//     }
//     return count;
// }
var list = '3 5 13 9 12';
console.log(breakNumber(list));
