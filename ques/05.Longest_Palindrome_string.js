/* 5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer. */

function longestPalindrome(s){

    if(s.length === 0) return "";

    //transform string 
    let t = '#' + s.split("").join('#') + '#';
    let arr = new Array(t.length).fill(0);
    let center = 0, right = 0;
    let maxLen = 0, centerIndex = 0;

    //exapnd around center
    for(let i = 0; i < t.length; i++){
        let mirror = 2 * center - i;

        //mirror property
        if(i < right){
            arr[i] = Math.min(right - i, arr[mirror]);
        }

        //expand around i
        while(i - arr[i] -1 >= 0 && i + arr[i] + 1 < t.length && t[i - arr[i] - 1] === t[i + arr[i] + 1]){
            arr[i]++;
        }

        //update center and right boundary
        if(i + arr[i] > right){
            center = i;
            right = i + arr[i];
        }

        //track max palindrome
        if(arr[i] > maxLen){
            maxLen = arr[i];
            centerIndex = i;
        }
    }

    let start = (centerIndex - maxLen) / 2;
    return s.substring(start, start+maxLen);
}

let s = "babad";
console.log(longestPalindrome(s));