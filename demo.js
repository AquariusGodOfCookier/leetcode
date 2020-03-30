//给定两个，一个答案一个猜想，输入伪答案和正确答案
"use strict"
var answer = function (solution, guess) {
    var count = 0;
    var index = 0;
    var number = [];
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] == guess[i]) {
            count++;
            solution = solution.split('');
            solution.splice(i, 1, " ");
            guess = guess.split('');
            guess.splice(i, 1, " ");
        }
    }
    for (j = 0; j < solution.length; j++) {
        if (solution.indexOf(guess[j]) != -1 && solution[j] != guess[j] && solution[j] != " " && guess[j] != " ") {
            number.push(guess[j]);
        }
    }
    var set = [...new Set(number)]
    index = set.length;
    return [count,index]
}
console.log(answer("YBBY", "GYYB"));