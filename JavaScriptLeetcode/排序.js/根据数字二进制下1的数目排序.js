// 根据数字二进制下 1 的数目排序
// 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。

// 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。

// 请你返回排序后的数组。
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    arr.sort((a,b)=>{
        let res = countBit(a)-countBit(b);
        if(res==0){
            return a-b;
        }else{
            return res;
        }
    })
    return arr;
};
var countBit = function (num) {
    let count = 0;
    while (num) {
        if (num & 1 == 1) {
            count++;
        }
        num >>= 1;
    }
    return count;
}
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));