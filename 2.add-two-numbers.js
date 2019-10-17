/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.99%)
 * Likes:    6162
 * Dislikes: 1600
 * Total Accepted:    1.1M
 * Total Submissions: 3.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */

// @lc code=start
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
var addTwoNumbers = function(l1, l2) {
    var curr = l1;
    var curr2 = l2;
    var carry = 0;
    var ptr = null;
    var ptr2 = null;
    while(curr !== null && curr2 !== null){
        var val1 = 0;
        var val2 = 0;
        if(curr !== null){
            val1 = curr.val;
            curr = curr.next;
        }
        if(curr2 !== null){
            val2 = curr2.val;
            curr2 = curr2.next;
        }
        let sum = val1 + val2 + carry;
        carry = 0;
        if(sum > 10){
            sum -= 10;
            carry = 1;
        }
        if(ptr === null){
            ptr = ListNode(sum);
        } else{
            ptr2 = ptr;
            ptr2.next = ListNode(sum);
            ptr2 = ptr2.next;
        }
    }
    return ptr;

};
// @lc code=end

