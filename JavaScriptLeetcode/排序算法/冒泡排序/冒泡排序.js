/**
 * @param {Array} numList
 * @return {Array}
 */

 var bubbleSort = function(numList){
    let len = numList.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(numList[j]>numList[j+1]){
                let flag = numList[j+1];
                numList[j+1] = numList[j];
                numList[j] = flag; 
            }
        }
    }
    return numList;
 }
var numList = [5,4,7,1,9,35,67,2,88,1];
console.log(bubbleSort(numList));