/**
 * 
 * @param {string} str
 * @return {string}
 */

var str = 'asdasdasdasdasdasdasda';

var dicWorcCount = function (str) {
    var strs = str.split('');
    strs.sort(function (a, b) {
        return a.localeCompare(b);
    })
    let set = new Set();
    let arr = [];
    let count = 1;
    strs.forEach((item, index) => {
        if (set.has(item)) {
            count++;
        }
        if (strs[index] != strs[index + 1] || index == strs.length - 1) {
            arr.push(count);
            count = 1;
        }
        set.add(item);

    })
    let astr = '';
    let index = 0;
    set.forEach((item) => {
        astr += item + arr[index]
        index++;
    });
    console.log(astr);
}

console.log(dicWorcCount(str));