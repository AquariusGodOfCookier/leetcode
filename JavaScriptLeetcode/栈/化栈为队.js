/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.queue = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue[this.queue.length] = x;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let item = this.queue[0];
    this.queue.splice(0,1);
    return item;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length==0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue)
queue.pop();
console.log(queue)
queue.pop();
console.log(queue)
// queue.empty();
// console.log(queue)