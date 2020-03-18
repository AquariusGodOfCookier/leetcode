// 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。
// 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 排序
var getLeastNumbers = function(arr, k) {
    arr.sort((a,b)=>{
        return a-b;
    })
    return arr.slice(0,k)
};

// 快排改良

var getLeastNumbers = function(arr,k){
    let len = arr.length;
    if(!len || !k){
        return []
    }
    let right = len-1;
    let left = 0;
    let index = _quickSort(arr,left,right);
    while(index!=k-1){
        if(index>k-1){
            index = _quickSort(arr,left,index-1);
        }else{
            index = _quickSort(arr,index+1,right)
        }
    }
    return arr.slice(0,index+1)
    
}
var _quickSort = function(arr,low,high){
    let base = arr[low];
    while(low<high){
        while(low<high && arr[high]>=base){
            high--
        }
        arr[low] = arr[high]
        while(low<high && arr[low]<base){
            low++;
        }
        arr[high] = arr[low]
    }
    arr[low] = base;
    return low;
}

var arr = [0,1,2,1];
var k = 1;
console.log(quickLearstNumbers(arr,k));