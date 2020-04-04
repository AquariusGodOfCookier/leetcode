// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""

// 最长公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0){
        return ''
    }
    strs = strs.sort((a,b)=>{
        return a.length-b.length;
    })
    let minStr = strs[0];
    while(minStr.length>0){
        let flag = true;
        for(let item of strs){
            if(item.substring(0,minStr.length)!=minStr){
                flag = false;
                minStr = minStr.substring(0,minStr.length-1)
            }
        }
        if(flag){
            return minStr
        }
    }
    return '';
};
var list = ["flower","flow"]
console.log(longestCommonPrefix(list))