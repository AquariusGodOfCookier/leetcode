// 数组的相对排序
// 给你两个数组，arr1 和 arr2，

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let result = [];
    let maxValue = Math.max.apply(Math,arr1);
    let number = new Array(maxValue+1).fill(0);
    for(let i=0;i<arr1.length;i++){
        number[arr1[i]]++;
    }
    for(let i=0;i<arr2.length;i++){
        while(number[arr2[i]]>0){
            result.push(arr2[i]);
            number[arr2[i]]--;
        }
    }
    for(let i=0;i<maxValue+1;i++){
        while(number[i]>0){
            result.push(i);
            number[i]--;
        }
    }
    return result;
};
var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2));