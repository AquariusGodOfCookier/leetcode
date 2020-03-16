var three = function (a, b) {
    let total = 0;
    let count = a;
    while (count <= b) {
        let num = '';
        for (let i = 1; i <= count; i++) {
            num += i;
            if (num.length > 5) {
                num = num.slice(-5);
            }
        }
        if (parseInt(num, 10) % 3 == 0) {
            total++;
        }
        count++;
        console.log(total)
    }

};
var a = 10, b = 110;
three(a, b);