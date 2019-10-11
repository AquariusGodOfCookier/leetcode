/**
 * @param {string} strs
 * @return {number}
 * 
 */

var strs = 'assdBdsHGHac';

var theBastTypewriteStrategy = function (strs) {
    let capital = /^[A-Z]$/;
    let number = 0;
    let index = 0;
    let flag= false;
    for (let i = index; i < strs.length; i++) {
        flag = false;
        if (capital.test(strs[i]) && capital.test(strs[i + 1])) {
            for (let j = i; j < strs.length; j++) {
                if (!capital.test(strs[j])) {
                    flag = true;
                    index = j
                    number = number + 3;
                    break;
                }
                console.log('+1',j)
                number++;
            }
            if(flag){
                break;
            }
            console.log(i,strs[i])
        }
        else if (capital.test(strs[i]) && !capital.test(strs[i + 1])) {
            number = number + 2;
            console.log(2);
        } else {
            console.log(1);
            number++;
        }
    }
    return number;
};

console.log(theBastTypewriteStrategy(strs));