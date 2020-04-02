// 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。

// 「距离值」 定义为符合此描述的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。

// 两个数组间的距离值

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let ans = 0;
    for(let i=0;i<arr1.length;i++){
        let target = arr1[i];
        let flag = true;
        for(let j=0;j<arr2.length;j++){
            if(Math.abs(target-arr2[j])<=d){
                flag = false;
            }
        }
        flag && ans++;
    }
    return ans

};
var arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
console.log(findTheDistanceValue(arr1,arr2,d));