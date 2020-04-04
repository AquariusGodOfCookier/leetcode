// 用两个栈实现一个队列。队列的声明如下，
// 请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

// 两个栈实现队列


var CQueue = function() {   
    this.static = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.static[this.static.length] = value;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.static.length==0){
        return -1;
    }
    let item = this.static[0];
    for(let i=1;i<this.static.length;i++){
        this.static[i-1] = this.static[i];
    }
    this.static.length--;
    return item;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var obj = new CQueue();
obj.appendTail(1);
obj.appendTail(2);
obj.deleteHead();
console.log(obj)