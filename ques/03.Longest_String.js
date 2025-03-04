/* 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. */

function longestSubstring(s) {
  let hashMap = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (hashMap.has(s[right])) {
      left = Math.max(hashMap.get(s[right]) + 1, left);
    }
    hashMap.set(s[right], right);

    //get max length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

let s = "abcabcbb";

console.log(longestSubstring(s));
