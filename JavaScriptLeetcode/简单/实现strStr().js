
// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// sunday 算法
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==''){
        return 0;
    }
    if(haystack.length<needle.length){
        return -1;
    }
    // 建立偏移表
    let deviation = new Map();
    for(let i=0;i<needle.length;i++){
        if(!deviation.has(needle)){
            deviation.set(needle[i],needle.length - needle.lastIndexOf(needle[i]))
        }
    }
    let index = 0;
    while(index+needle.length <= haystack.length){
        str_cut = haystack.substring(index,index+needle.length);
        if(str_cut==needle){
            return index;
        }else{
            if(index+needle.length>=haystack.length){
                return -1;
            }else{
                cur_c = haystack[index+needle.length];
                if(deviation.has(cur_c)){
                    index += deviation.get(cur_c)
                }else{
                    index += needle.length+1
                }
            }
        }
    }
    return index+needle.length>=haystack.length?-1:index
};

// 解题思路：
// 相似的查找算法有 KMP，BM，Horspool，挑了一个在实际情况中效果较好且理解简单的算法，即 Sunday 算法。

// 一、Sunday 匹配机制
// 匹配机制非常容易理解：

// 目标字符串String

// 模式串 Pattern

// 当前查询索引 idx （初始为 00）

// 待匹配字符串 str_cut : String [ idx : idx + len(Pattern) ]

// 每次匹配都会从 目标字符串中 提取 待匹配字符串与 模式串 进行匹配：

// 若匹配，则返回当前 idx

// 不匹配，则查看 待匹配字符串 的后一位字符 c：

// 若c存在于Pattern中，则 idx = idx + 偏移表[c]

// 否则，idx = idx + len(pattern)

// Repeat Loop 直到 idx + len(pattern) > len(String)

// 二、偏移表
// 偏移表的作用是存储每一个在 模式串 中出现的字符，在 模式串 中出现的最右位置到尾部的距离 +1+1，例如 aab：

// a 的偏移位就是 len(pattern)-1 = 2
// b 的偏移位就是 len(pattern)-2 = 1
// 其他的均为 len(pattern)+1 = 4


var haystack = "mississippi"
var needle = "pi"
console.log(strStr(haystack,needle));