
//给出一个字符串 s（仅含有小写英文字母和括号）。
//请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
//输入：s = "(ed(et(oc))el)"
//输出："leetcode"
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    s = s.split('');
    let stack = [];
    let leftIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
            leftIndex.push(i);
        } else if (s[i] == ')') {
            // 找到离栈顶最近的(,把中间的值取出来,反转，且删除掉(,
            console.log(stack)
            let left_index = leftIndex.pop();
            let sub = stack.slice(left_index + 1).reverse();
            // console.log(stack)
            // console.log(sub)
            // stack = stack.slice(0, left_index).concat(sub);
          
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('')
};
var s ="ta()usw((((a))))";
console.log(reverseParentheses(s));