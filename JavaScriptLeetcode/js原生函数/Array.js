Array.prototype._push = function(){
    let argumentsList = Array.from(arguments);
    let len = this.length;
    for(let i=0;i<argumentsList.length;i++){
        this[len] = argumentsList[i];
        len++;
    }
};
Array.prototype._pop = function(){
    let item = this[this.length-1];
    this.length-=1;
    return item;
}
Array.prototype._unshift = function(){
    for(let i=0;i<arguments.length;i++){
        this.length += 1;
        for(let i=this.length-1;i>0;i--){
            this[i] = this[i-1];
        }
        this[0] = arguments[i];
    }
}
Array.prototype._shift = function(){
    let result = this[0];
    for(let i=1;i<this.length;i++){
        this[i-1] = this[i]
    }
    return result;
}
Array.prototype._concat = function(){
    // 他不会改变原有数组，而是返回一个新数组
    let result = [];
    for(let i=0;i<this.length;i++){
        result[i] = this[i]
    }
    let len = result.length;
    for(let i=0;i<arguments.length;i++){
        if(Object.prototype.toString.call(arguments[i])==='[object Array]'){
            for(let j=0;j<arguments[i].length;j++){
                result[len] = arguments[i][j];
                len++;
            }
        }else{
            result[len] = arguments[i];
            len++;
        }
    }
    return result;
}

var nums = [[2]];
var nums2 = [1,2,3,4,5];
// console.log(nums2._copyWithin(0,4,5));
// console.log(nums._concat(1,nums2))
// nums._push(2);
// console.log(nums)
// console.log(nums._pop())
// console.log(nums);
nums2._unshift(1,3);
console.log(nums2)
console.log(nums2.shift())
console.log(nums2)
