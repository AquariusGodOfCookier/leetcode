// 我们来定义一个函数 f(s)，其中传入参数 s 是一个非空字符串；
// 该函数的功能是统计 s  中（按字典序比较）最小字母的出现频次。

// 例如，若 s = "dcce"，那么 f(s) = 2，
// 因为最小的字母是 "c"，它出现了 2 次。

// 现在，给你两个字符串数组待查表 queries 和词汇表 words，
// 请你返回一个整数数组 answer 作为答案，
// 其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的词的数目，
// W 是词汇表 words 中的词。
//  比较字符串最小字母出现频次
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
    let queriesList = [];
    let wordsList = [];
    queries.forEach(item=>{
        queriesList.push(queryFrequency(item))
    })
    words.forEach(item=>{
        wordsList.push(queryFrequency(item))
    })
    let result = [];
    let len = wordsList.length;
    wordsList  = wordsList.sort((a,b)=>{
        return a-b;
    })
    queriesList.forEach(item=>{
        if(item>=wordsList[wordsList.length-1]){
            result.push(0);
            return;
        }
        for(let i=0;i<wordsList.length;i++){
            if(item<wordsList[i]){
                result.push(len-i)
                return;
            }
        }
    })
    return result

};
var queryFrequency = function(arr){
    // 获取字符串中最小字符出现次数
    let count = 1;
    arr = arr.split('').sort();
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1]){
            count++
        }else{
            return count;
        }
    }
    return count   
}
var queries = ["aabbabbb","abbbabaa","aabbbabaa","aabba","abb","a","ba","aa","ba","baabbbaaaa","babaa","bbbbabaa"];
var words =["b","aaaba","aaaabba","aa","aabaabab","aabbaaabbb","ababb","bbb","aabbbabb","aab","bbaaababba","baaaaa"];
console.log(numSmallerByFrequency(queries, words))