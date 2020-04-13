// 输出出现次数最多的字母前数字之和
// var numberCount = function (num) {
//     let map = new Map();
//     for(let item of num){
//         let letter = item.split('')[item.length-1];
//         map.set(letter,map.has(letter)?map.get(letter)+1:1);
//     }
//     let mapList = Array.from(map);
//     mapList.sort((a,b)=>{
//         return b[1]-a[1];
//     })
//     let maxLetter = mapList[0][0];
//     let count = 0;
//     for(let item of num){
//         let letter = item.slice(item.length-1);
//         let number = item.slice(0,item.length-1);
//         if(letter==maxLetter){
//             count+=parseInt(number)
//         }
//     }
//     return count;
// }

var numberCount = function(num){
    let list = new Array(26);
    for(let i=0;i<list.length;i++){
        list[i] = [0,0];
    }
    for(let item of num){
        let letter = item.slice(item.length-1);
        let number = parseInt(item.slice(0,item.length-1));
        let index = letter.charCodeAt()-'a'.charCodeAt();
        list[index][0]++;
        list[index][1] += number;
    }
    list.sort((a,b)=>{
        return b[0]-a[0];
    })
    return list[0][1];
}

var num = ['1a', '2b', '13c', '5a','1c','9c'];
console.log(numberCount(num));