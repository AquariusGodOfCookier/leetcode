/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/**
给定一个字符串和一个整数 k，
你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。
如果剩余少于 k 个字符，则将剩余的所有全部反转。
如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
示例:
输入: s = "abcdefg", k = 2
输出: "bacdfeg"
 */
var reverseStr = function (s, k) {
    let arrs = s.split('');
    let str = '';
    let arr = [];
    let count = 0;
    let k2 = 2*k;
    let k1 = k;
    while(arrs.length>0){
        count++;
        str += arrs.shift();
        if(count >= k2){
            arr.push(str);
            str = '';
            count = 0;
        }
    }
      // 把不够结尾不够2k的存进来
    if(str!=''){
        arr.push(str);
    }
    let strs = '';
    arr.forEach(item=>{
        let itemlist = item.split('');
        // 把每2k个字符的前k个字符反转 || 如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
        if(itemlist.length==k2 || (itemlist.length<k2 && itemlist.length>=k1) ){
            let left = 0; let right = k1-1;
            while(left<=right){
                let temp = itemlist[left];
                itemlist[left] = itemlist[right];
                itemlist[right] = temp;
                left++;
                right--;
            }
        }
        // 如果剩余少于 k 个字符，则将剩余的所有全部反转。
        else if(itemlist.length<k1){
            let left = 0; let right = itemlist.length-1;
            while(left<=right){
                let temp = itemlist[left];
                itemlist[left] = itemlist[right];
                itemlist[right] = temp;
                left++;
                right--;
            }
        }
        itemlist.forEach(i=>{
            strs += i;
        })
    })
    return strs;
};
var s = 'abcdefg';
var k = 9;
console.log(reverseStr(s, k));