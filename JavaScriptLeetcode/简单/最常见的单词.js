// 最常见的单词
// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。
// 返回出现次数最多，同时不在禁用列表中的单词。
// 题目保证至少有一个词不在禁用列表中，而且答案唯一。

// 禁用列表中的单词用小写字母表示，不含标点符号。
// 段落中的单词不区分大小写。答案都是小写字母。

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.replace(/[!?,'.;]/g, ' ').split(' ')
    let map = new Map();
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] != '') {
            let strings = paragraph[i].toLocaleLowerCase()
            if (banned.indexOf(strings) == -1) {
                if (map.has(strings)) {
                    map.set(strings, map.get(strings) + 1)
                } else {
                    map.set(strings, 1)
                }
            }
        }
    }

    var arrMap = Array.from(map).sort((a, b) => {
        return b[1] - a[1]
    })
    return arrMap[0][0]

};
var paragraph = "Bob hit a ball!, the hit BALL, flew far after it was hit."
var banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))