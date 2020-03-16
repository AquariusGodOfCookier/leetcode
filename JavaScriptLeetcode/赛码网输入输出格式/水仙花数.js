/**
 * 春天是鲜花的季节，水仙花就是其中最迷人的代表，数学上有个水仙花数，他是这样定义的： 
 * “水仙花数”是指一个三位数，它的各位数字的立方和等于其本身，
 * 比如：153=1^3+5^3+3^3。 现在要求输出所有在m和n范围内的水仙花数。
 */
var cmd = require('node-stdio');
function start() {
    while (true) {
        var input = cmd.read_line();
        execution(input);
    }
}
function execution(input) {
    let nums1 = input.split(' ')[0];
    let nums2 = input.split(' ')[1];
    let arr = [];
    for (let i = nums1; i <= nums2; i++) {
        if (isFlowers(i)) {
            arr.push(i)
        }
    }
    if (arr.length == 0) {
        console.log('no');
    } else {
        let zs = ''
        arr.forEach(item => {
            zs += item +' '
        })
        console.log(zs);
    }
}
function isFlowers(i) {
    let a = String(i).split('');
    let number = 0;
    a.forEach(z => {
        number += Math.pow(parseInt(z, 10), a.length);
    })
    if (number == i) {
        return true;
    } else {
        return false;
    }
}
start();