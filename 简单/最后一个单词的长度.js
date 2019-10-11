/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let str = s.split(' ').pop().length;
    return str;
};
var s = 'a ';
lengthOfLastWord(s);