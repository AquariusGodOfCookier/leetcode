// 最小绝对差

// 给你个整数数组 arr，其中每个元素都 不相同。

// 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>{
        return a-b;
    })
    let minCount = arr[1]-arr[0];
    for(let i=2;i<arr.length;i++){
        if(arr[i]-arr[i-1]<minCount){
            minCount = arr[i]-arr[i-1]
        }
    }
    let result = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]==minCount){
            result.push([arr[i-1],arr[i]])
        }
    }
    return result;
};
var arr = [3,8,-10,23,19,-4,-14,27];
console.log(minimumAbsDifference(arr));