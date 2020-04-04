/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.stack.length] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let item = this.stack[this.stack.length-1];
    this.stack.length--;
    return item;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Math.pow(2,31);
    for(let i=0;i<this.stack.length;i++){
        min = Math.min(this.stack[i],min);
    }
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack();
obj.push(1)
obj.push(5)
obj.push(2)
var param_3 = obj.top();
var param_4 = obj.getMin()
console.log(obj,param_3,param_4)