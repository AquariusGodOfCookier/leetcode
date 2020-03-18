// var dateStr = "friday";
// (function(){
//     if(typeof dateStr === 'undefined'){
//         var dateStr = 'Saturday';
//         console.log('Hello '+dateStr)
//     }
//     else{
//         console.log('Happy '+dateStr)
//     }
// })();
// var a = 'abc',b;
// b = a.toUpperCase();
// console.log(a===b)

var quickSort = function(nums){
    _quickSort(nums,0,nums.length-1);
    return nums;
}
var _quickSort = function(nums,left,right){
    if(left>=right){
        return;
    }
    let low = left;
    let high = right;
    let base = left;
    while(low<high){
        while(high>base && nums[high]>=nums[base]){
            high--;
        }
        if(low>=high){
            break;
        }
        while(low<high && nums[low]<=nums[base]){
            low++;
        }
        [nums[base],nums[high],nums[low]] = [nums[high],nums[low],nums[base]]
        base = low;
    }
    _quickSort(nums,left,base-1);
    _quickSort(nums,base+1,right);
    return nums;
}
var nums =  [5,6,0,9,10,17];
var selectSort = function(nums){
    let len = nums.length;
    let minIndex,temp;
    for(let i=0;i<len;i++){
        minIndex = i;
        for(let j=i+1;j<len;j++){
            if(nums[j]<nums[minIndex]){
                minIndex = j;
            }
        }
        [nums[i],nums[minIndex]] = [nums[minIndex],nums[i]];
    }
    return nums;
}
var mergeSort = function(nums){
    let len = nums.length;
    if(len<=2){
        return nums;
    }
    let middle = Math.floor(len/2);
    let left = nums.slice(0,middle);
    let right = nums.slice(middle);
    return _mergeSort(mergeSort(left),mergeSort(right))
}
var _mergeSort = function(left,right){
    let result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift())
    }
    return result;
}
// console.log(mergeSort(nums));

/**
 * cookie的存储能力弱，适合存储数据量较小的内容，大小不超过4k，可以设置过期时间，参与服务器通信
 * 如果不设就是当浏览器关掉就消失，存储到内存中，存储在document.cookie中，始终在同源的http请求中携带，能够在所有同源浏览器窗口共享
 * 
 * localstore 大小比cookie大，能存储5m以上数据，除非 手动清除，否则永久有效，仅在浏览器端保存，不能参与服务器通信，能够在所有同源浏览器窗口共享
 * sessionstore 大小比cookie大，能存储5m以上数据，浏览器关闭就清除，也是只能保存在浏览器端，不能参与服务器通信，不能在不同浏览器窗口共享
 */
var a = [1,2,3];
var b = [...a];
console.log(a==b) //false

console.log(0.1+0.2==0.3)