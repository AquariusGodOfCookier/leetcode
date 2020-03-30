// 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

// 气球的最大数量
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let balloonList = new Array(5).fill(0);
    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'b') {
            balloonList[0]++;
        }
        if (text[i] == 'a') {
            balloonList[1]++;
        }
        if (text[i] == 'l') {
            balloonList[2]++;
        }
        if (text[i] == 'o') {
            balloonList[3]++;
        }
        if (text[i] == 'n') {
            balloonList[4]++;
        }
    }
    balloonList[2] = Math.floor(balloonList[2]/2);
    balloonList[3] = Math.floor(balloonList[3]/2);
    return Math.min.apply(Math,balloonList);
};
var text = 'balon';
console.log(maxNumberOfBalloons(text))