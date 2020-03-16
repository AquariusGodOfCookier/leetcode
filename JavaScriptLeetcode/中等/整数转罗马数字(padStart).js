/**
 * @param {number} number
 * @return {string}
 */

var number = 1994;
var intToRoman = function (number) {
    const romanCharOne = ['I', 'X', 'C', 'M'];
    const romanCharFive = ['V', 'L', 'D'];
    let pointer = 0;
    let result = '';
    while (number > 0) {
        numberFlag = number % 10;
        switch (numberFlag) {
            case 1:
            case 2:
            case 3:
                result = `${romanCharOne[pointer].padStart(numberFlag,romanCharOne[pointer])}${result}`;
                break;
            case 4:
                result = `${romanCharOne[pointer]}${romanCharFive[pointer]}${result}`;
                break;
            case 5:
                result = `${romanCharFive[pointer]}${result}`;
                break;
            case 6:
            case 7:
            case 8:
                result = `${romanCharFive[pointer]}${romanCharOne[pointer].padStart(numberFlag - 5,romanCharOne[pointer])}${result}`;
                break;
            case 9:
                result = `${romanCharOne[pointer]}${romanCharOne[pointer+1]}${result}`;
                break;
        }
        number = Math.floor(number/10);
        pointer++;
    }
    return result;
}
console.log(intToRoman(number));

