/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (46.57%)
 * Likes:    1909
 * Dislikes: 1470
 * Total Accepted:    799.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //Time Complexity: O(n/2)
    //Space Complexity: O(1)
    //Loop iterates Math.ceil(numDigits/2) times
    //Solving without string conversion

    var num = x;
    if(num < 0){
        return false;
    }    
    var numDig = Math.floor(Math.log10(num)+1);
    for(let i = 0; i < Math.ceil((Math.round(Math.log10(num))+1)/2); i++){
        if(Math.floor(num/Math.pow(10, i)) % 10 !== Math.floor(num/Math.pow(10, numDig-1-i))%10){
            return false;
        }
    }
    return true;
};

// console.log(isPalindrome(1000021));
// console.log(isPalindrome(11));
// console.log(isPalindrome(-101));

// @lc code=end

