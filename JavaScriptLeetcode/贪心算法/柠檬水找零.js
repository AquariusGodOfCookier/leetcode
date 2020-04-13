// 柠檬水找零
// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

// 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

// 注意，一开始你手头没有任何零钱。

// 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0,
        ten = 0;
    for (let item of bills) {
        if (item == 5) {
            five += 1;
        } else if (item == 10) {
            if (five >= 1) {
                five -= 1;
                ten += 1;
            } else {
                // console.log(1,five,ten)
                return false;
            }
        } else if (item == 20) {
            if (ten >= 1 && five >= 1) {
                ten -= 1;
                five -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                // console.log(2,five,ten)
                return false;
            }
        }
    }
    return true;
};
var bills = [5,5,10,10,5,20,5,10,5,5]
console.log(lemonadeChange(bills));