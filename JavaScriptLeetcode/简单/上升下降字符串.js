// 给你一个字符串 s ，请你根据下面的算法重新构造字符串：

// 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
// 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
// 重复步骤 2 ，直到你没法从 s 中选择字符。
// 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
// 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
// 重复步骤 5 ，直到你没法从 s 中选择字符。
// 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。

// 上升下降字符串
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let map = new Map();
    s = s.split('').sort()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let result = '';
    let list = Array.from(map.keys())
    while (result.length != s.length) {
        for (let i = 0; i < list.length; i++) {
            if (map.get(list[i]) > 0) {
                result += list[i]
                map.set(list[i], map.get(list[i]) - 1);
            }
        }
        for (let j = list.length - 1; j >=0; j--) {
            if (map.get(list[j])>0) {
                result += list[j];
                map.set(list[j], map.get(list[j]) - 1);
            }
        }
    }
    return result;
};
var s = "aaaabbbbcccc";
console.log(sortString(s))