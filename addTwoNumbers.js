/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * NOTICE: After loop, DONT forget to add carry.
 * NOTICE: Consider the condition that l1.length is not equal to l2
 * NOTICE: Remember to clear carry
 * NOTICE: Please consider if l1 or l2 is null in the loop as their length may not equal. E.G. l1 !== null, l2 === null. So if you use l2.next, an error will be throwed
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   var carry= 0
   var ret = []
    while(l1 || l2) {
        var sum = (l1?l1.val:0) + (l2?l2.val:0 )+ carry
        ret.push(sum % 10)
        carry = Math.floor(sum / 10)
        
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        
    }
    if(carry) {
        ret.push(carry)
    }
    return ret
};

const ret = addTwoNumbers({
    val:2,
    next: {
        val: 4,
        next: {
            val:3,
            next: null
        }
    }
},
{
    val:5,
    next: {
        val:6,
        next: {
            val: 4,
            next: null
        }
    }
}
)
console.log(ret);