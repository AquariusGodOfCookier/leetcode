// 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

// 'A' : Absent，缺勤
// 'L' : Late，迟到
// 'P' : Present，到场
// 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。

// 你需要根据这个学生的出勤记录判断他是否会被奖赏。

// 学生出勤记录I

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let aCount = s[0]=='A'?1:0;
    aCount += s[1]=='A'?1:0;
    if(aCount>1){
        return false
    }
    for(let i=2;i<s.length;i++){
        if(s[i]=='A'){
            aCount++;
            if(aCount>1){
                return false
            }
        } else if(s[i]=='L' && s[i-1]=='L' && s[i-2] =='L'){
            return false
        }
    }
    return true
};

var s = "PPALLL";
console.log(checkRecord(s))