
String.prototype.indexsOf = function(str){
    for(let i=0;i<this.length-str.length+1;i++){
        if(this[i]==str[0]){
            let list = []
            for(let j=i;j<i+str.length;j++){
                list.push(this[j])
            }
            if(list.join('')===str){
                return i
            }
        }
    }
    return -1
}

console.log('abbc'.indexsOf('bc'))