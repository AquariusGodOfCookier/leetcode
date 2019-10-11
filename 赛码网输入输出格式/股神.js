
var cmd = require('node-stdio');

var func = (n) => {
    let i = 0,
        k = 2,
        j = 2;
    while (k < n) {
        i = i + 2;
        j = j + 1;
        k = k + j;
    }

    return n - i;
}

var line;
while ((line = cmd.readInt()) != null) {
    cmd.print(func(line));
}