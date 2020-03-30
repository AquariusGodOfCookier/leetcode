var oddEvenSort  =function(nums){
    let list = [];
    for(let item of nums){
        if(item%2==0){
            list.push(item)
        }else{
            list.unshift(item)
        }
    }
    return list;
}
var nums = [1,2,3,4,5];
console.log(oddEvenSort(nums));