/**
 * 2019 6 31
 */
var dontExistDate = function(str){
    let dateList = str.split(' ');
    let year = Number(dateList[0]);
    let month = Number(dateList[1]);
    let days = Number(dateList[2]);
    let realDay = 0;
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
        realDay = 31;
    }else if(month==4||month==6||month==9||month==11){
        realDay = 30;
    }else if((year%4==0&&year%100!=0&&month==2)||(year%400==0&&month==2)){
        realDay = 29;
    }else{
        realDay = 28;
    }
    if(year%3200==0 && month == 2){
        if(year%172800==0){
            realDay = 29;
        }else{
            realDay = 28;
        }
    }
    if(days>realDay){
        realDay = days-realDay;
        month+=1;
    }
    if(month>12){
        month=1;
        year+=1;
    }
    month = month<10?'0'+month:month;
    realDay = realDay<10?'0'+realDay:realDay;
    console.log(year+'-'+month+'-'+realDay);
    //console.log(year,month,realDay,days)
}
var str = '3200 2 29';
console.log(dontExistDate(str));