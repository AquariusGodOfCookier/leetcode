var changeArr = function(arrA,arrB){
    arrA = arrA.split(' ').map(item=>{
        return parseInt(item)
    })
    arrB = arrB.split(' ').map(item=>{
        return parseInt(item);
    })
    let fontIndex = 0;
    let backIndex = 0;
    for(let i=0;i<arrA.length;i++){
        if(arrA[i]!=arrB[i]){
            fontIndex = i;
            break;
        }
    }
    for(let i=arrA.length-1;i>=0;i--){
        if(arrA[i]!=arrB[i]){
            backIndex = i;
            break;
        }
    }
    if(fontIndex == backIndex){
        return true;
    }
    let flag = Math.abs(arrA[fontIndex]-arrB[fontIndex]);
    for(let i=fontIndex;i<=backIndex;i++){
        if(parseInt(arrA[i])+flag != parseInt(arrB[i])){
            return false;
        }
    }
    return true;
}
// 2
// 6
// 3 7 1 4 1 2
// 3 7 3 6 3 2
// 5
// 1 1 1 1 1
// 1 2 1 3 1
var arrA = "3 7 1 4 1 2";
var arrB = "3 7 3 6 3 2";
console.log(changeArr(arrA,arrB));