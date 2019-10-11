
var cmd = require('node-stdio');
function start() {
    while (true) {
        var input = cmd.read_line();
        console.log(execution(input));
    }
}
function execution(input) {
    let nums = input.split(' ');
    let add1 = parseInt(nums[0], 10);
    let add2 = parseInt(nums[1], 10);
    let total = add1;
    for (let i = 0; i < add2 - 1; i++) {
        add1 = Math.sqrt(add1);
        total += add1;
    }
    return total.toFixed(2);
}
start();
