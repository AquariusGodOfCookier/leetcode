// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。
// 包含min函数的栈
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
MinStack.prototype.min = function() {
    let min = Math.pow(2,31);
    for(let item of this.stack){
        min = Math.min(item,min);
    }
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack)
var min = minStack.min();   
var pop = minStack.pop();    
console.log(minStack,min,pop);
var top = minStack.top();
var min = minStack.min();
console.log(top,min,minStack)