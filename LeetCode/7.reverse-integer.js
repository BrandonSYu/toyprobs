/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.63%)
 * Likes:    2849
 * Dislikes: 4465
 * Total Accepted:    950.3K
 * Total Submissions: 3.7M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var val = x;
    var result = 0;
    var firstZeroCheck = false;
    var negNum = false;
    var negLimit= -0x80000000;
    var posLimit= 0x7fffffff;
    if(x < 0){
        val *= -1;
        negNum = true;
    }
    while(val > 0){
        result = result * 10 + (val % 10);
        val = (val - (val%10)) / 10;
    }
    if(negNum){
        return result*-1 < negLimit ? 0 : result*-1;
    } else{
        return result > posLimit ? 0 : result;
    }
};

//console.log(reverse(1534236469));
// console.log(reverse(1203));
// console.log(reverse(-123));

// @lc code=end

