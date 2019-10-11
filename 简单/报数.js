/**
 * @param {number} n
 * @return {string}
 */
//https://leetcode-cn.com/problems/count-and-say/
// 报数序列，需要用嘴读出来，规定第一项为1，第二项为一个一，也就是11，第三项读第二项为两个一，也就是21
// 1 1
// 2 11
// 3 21
// 4 1211
// 5 111221
// 6 312211
var n = 4;
var countAndSay = function (n) { 
    if(n==1){
        return '1';
    }else{
        let str = countAndSay(n-1);
        let temp = str[0];
        let count = 0;
        let ans = ''; 
        for(let i=0;i<str.length;i++){
            if(temp == str[i]){
                count++;
            }else{
                ans += ''+count+temp;
                temp=str[i];
                count = 1;
            }
            if(i == str.length-1){
                ans += ''+count+temp;
            }
        }
        return ans
    }
}


console.log(countAndSay(n));