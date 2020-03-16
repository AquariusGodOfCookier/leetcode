/**
 * @param {string} s
 * @return {boolean}
 */

var s = "()[]{}";

var isValid = function (s) {
    let arr = [];
    let map = {
        ")": '(',
        "}": '{',
        "]": '['
    }
    for (let i of s) {
        if(i=='('||i=='{'||i=='['){
            arr.push(i)
        }else{
            if(arr.pop()!=map[i]){
                return false;
            }
        }
    }
    if(arr.length==0){
        return true;
    }else{
        return false;
    }

}
console.log(isValid(s))