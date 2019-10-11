
/**
 * @param{string} str
 * @return {number}
 */

var string = "-+2";
// var myAtoi = function (str) {
//     let newstr = str.trim();
//     // let res = /^[\+\-]?\d+$/;
//     let res = /^[0-9]$/;
//     console.log(res.exec(newstr));
//  }
var myAtoi = function (str) {
    var INT_MAX = Math.pow(2, 31) - 1;
    var INT_MIN = Math.pow(-2, 31);
    //先去掉字符串的首尾空格
    let strs = str.trim();
    let re = /^[0-9]$/;
    if (strs[0] == '+' || strs[0] == '-' || re.test(strs[0])) {
        //如果首位是正负号或者是数字，则开始进行下一步
        let newstr;
        if (strs[0] == "+") {
            newstr = '';
        } else {
            newstr = strs[0];
        }
        if (strs.length == 1) {
            if (re.test(strs[0])) {
                return strs[0]
            } else {
                return 0;
            }
        } else {
            for (let i = 1; i < str.length; i++) {
                if (re.test(strs[i])) {
                    newstr += strs[i];
                } else {
                    break;
                }
            }
            let jsonStr = parseInt(newstr);
            if (isNaN(jsonStr)) {
                return 0;
            } else {
                if (jsonStr < INT_MIN) {
                    return INT_MIN;
                } else if (jsonStr > INT_MAX) {
                    return INT_MAX;
                } else {
                    return jsonStr;
                }
            }
        }


    } else {
        //否则就返回0
        return 0;
    }
}

console.log(myAtoi(string));