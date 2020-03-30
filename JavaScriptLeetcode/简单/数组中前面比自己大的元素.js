var list = function(str){
    let count = ''
    str = str.split(' ');
    for(let i=0;i<str.length;i++){
        let map = new Map()
        for(let j=0;j<i;j++){
            if(parseInt(str[j])>parseInt(str[i])){
                map.set(str[j],j+1);
            }
        }
        if(map.size==1){
            for(let value of map.values()){
                count += value+' '
            }
        }
    }
    return count==''?-1:count.trim();
}
var str = "1 22 22 33 22 12 45 44 5";
console.log(list(str))