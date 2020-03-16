// 4 2
// 1 3 2 4
// 3 2
// 2 4

var fun = function(list){
    let theList = list[0].split(' ');
    let a = list.slice(1);
    let left = 0;
    let index = 0;
    let obj = {};
    let isHave = false;
    let isZiHave = false;
    let count = 0;
    a.forEach(item=>{
        item = item.split(' ');
        obj[item[0]] = item[1];
    })
    while(left<theList.length){
        index = left;
        for(let i=index;i<theList.length;i++){
            if(obj.hasOwnProperty(theList[index])){ // 如果有这个碰碰对
                isHave = true;
                let flag = theList[index];
                for(let j = i;j<theList.length;j++){ //遍历当前一直到结束，看看有没有对应的碰碰对
                    if(theList[j] == flag){
                        isZiHave = true; //发现有
                    }
                }
                if(!isZiHave){
                    count++;
                }
                isZiHave = false;
            }
        }
        if(!isHave){//最后如果该序列数组没有对对
            count++;
        }
        isHave = false;
        left=left+1;
    }
    console.log(count);
}
var list = ['1 3 2 4', '3 2', '2 4'];
console.log(fun(list))