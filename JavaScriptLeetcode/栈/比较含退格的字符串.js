// 比较含退格的字符串
// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，
// 判断二者是否相等，并返回结果。 # 代表退格字符。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sstack = [];
    let tstack = [];
    for(let item of S){
        if(item!='#'){
            sstack.push(item);
        }else{
            sstack.pop();
        }
    }
    for(let item of T){
        if(item!='#'){
            tstack.push(item);
        }else{
            tstack.pop();
        }
    }
    return sstack.join('')==tstack.join('');
};
var S = "ab#c", T = "ad#c";
console.log(backspaceCompare(S,T));