// 反转一个单链表。
// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!(head && head.next)) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
class Node {
    constructor(element) {
        this.val = element;
        this.next = null;
    }
}
class ListNode {
    constructor() {
        this.head = null;
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }
}
let list = new ListNode();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(reverseList(list.head))