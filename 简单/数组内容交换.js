
/**
 * 
 * @param {array}   list        数组
 * @param {number}  oldindex    老数组的位置
 * @param {number}  newindex    要交换的新数组的位置
 *  
 */
var listChange = function (arr, index1, index2) {
    const bef = dataList[index];
    const aft = dataList[index + count];
    dataList.splice(count === 1 ? index : index + count, 2, count === 1 ? aft : bef, count === 1 ? bef : aft);

}
var num = [1, 2, 3, 4, 5];
listChange(num, 2, 5);
// 把num数组的第二位与第五位进行交换