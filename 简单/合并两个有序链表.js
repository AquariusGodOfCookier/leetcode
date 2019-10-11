/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// function listnode() {
//     function Node(val) {
//         this.val = val;
//         this.next = null;
//     };
//     var length = 0;
//     var head = null;
//     this.append = function (val) {
//         var node = new Node(val);
//         var current;
//         if (head == null) {
//             head = node;
//         } else {
//             current = head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//             length++;
//         }

//     };
//     this.tostring = function () {
//         var string = head.val;
//         var current = head.next;
//         while (current) {
//             string += '->' + current.val;
//             current = current.next;
//         }
//         return string

//     }

// }
// var l1 = new listnode();
// l1.append(1);
// l1.append(3);
// l1.append(5);
// var l2 = new listnode();
// l2.append(2);
// l2.append(4);
// l2.append(6);
// console.log(l1.tostring(), l2.tostring());
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
var l2 = new ListNode(0);
l2.next = new ListNode(3);
l2.next.next = new ListNode(5);

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    };
    if (l2 === null) {
        return l1;
    };
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l2, l1.next);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
// console.log(l1.next)
 console.log(mergeTwoLists(l1, l2).next.next)