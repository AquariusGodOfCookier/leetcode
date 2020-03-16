/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var s = 'mississippi'
var p = 'mis*is*p*.'

var isMatch = function (s, p) {
    var reg = new RegExp('^' + p + '$');
    return reg.test(s);

}

console.log(isMatch(s, p))