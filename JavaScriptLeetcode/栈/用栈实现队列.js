/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.queue = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.queue[this.queue.length] = x;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.empty()) {
        return undefined;
    }
    let item = this.queue[0];
    for (let i = 1; i < this.queue.length; i++) {
        this.queue[i - 1] = this.queue[i];
    }
    this.queue.length--;
    return item;

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.queue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.queue.length==0?true:false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(5);
obj.push(3);
obj.push(7);
console.log(obj);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();
console.log(obj, param_2, param_3, param_4);