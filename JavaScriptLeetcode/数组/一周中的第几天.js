// 一周中的第几天
// 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

// 输入为三个整数：day、month 和 year，分别表示日、月、年。

// 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// var dayOfTheWeek = function(day, month, year) {
//     let weekList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
//     if(month==1 || month == 2){
//         month += 12;
//         year--;
//     }
//     let week = (day + 2*month + 3*(month+1)/5 + year + year/4 - year/100 + year/400)%7;
//     return weekList[Math.floor(week)]
// };
var dayOfTheWeek = function(day, month, year) {
    let weekList = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(`${year}-${month}-${day}`).getDay();
    return weekList[date]
};

var day = 18, month = 7, year = 1999
console.log(dayOfTheWeek(day,month,year));