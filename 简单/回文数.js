/**
 * @param {number} x
 * @return {boolean}
 */
var x = -1221;
var isPalindrome = function (x) {
    let xarr = '';
    if (x < 0) {
        return false;
    }else if(x==0){
        return true;
    }else{
        xarr = JSON.stringify(x).split('').reverse().join('')
    }
    if(xarr == x){
        return true;
    }else{
        return false;
    }

}

console.log(isPalindrome(x));