class Strings{
    constructor(str){
        this.str = str
        this.length = str.length
    }
    substring(start,length){
        let list = [];
        for(let i=start;i<start+length;i++){
            list.push(this.str[i]);
        }
        return list.join('');
    }
    indexOf(s){
        for(let i=0;i<this.length-s.length+1;i++){
            if(this.str[i]===s[0] && this.substring(i,s.length)===s){
                return i;
            }
        }
        return -1;
    }
}

var str = new Strings('abc');
console.log(str.indexOf('c'))