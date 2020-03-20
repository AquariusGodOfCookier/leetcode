// 国际摩尔斯密码定义一种标准编码方式，
// 将每个字母对应于一个由一系列点和短线组成的字符串，
//  比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。

// 为了方便，所有26个英文字母对应摩尔斯密码表如下：
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morseList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let set = new Set()
    words.forEach(item=>{
        let str = ''
        for(let i=0;i<item.length;i++){
            str += morseList[item[i].charCodeAt()-'a'.charCodeAt()]
        }
       set.add(str)
    })
    return set.size
};
words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));