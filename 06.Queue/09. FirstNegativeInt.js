//first negative in every window of size k
class Solution {
  printFirstNegativeInteger(n, k, arr) {
    // code here

    let dq = [];
    let result = [];

    //if the element is negative, adding the index
    for (let i = 0; i < n; i++) {
      if (arr[i] < 0) {
        dq.push(i);
      }

      //remove the first element out of the window
      if (dq.length > 0 && dq[0] < i - k + 1) {
        dq.shift();
      }

      if (i >= k - 1) {
        if (dq.length > 0) {
          result.push(arr[dq[0]]);
        } else {
          result.push(0);
        }
      }
    }

    return result;
  }
}

const sol = new Solution();
console.log(sol.printFirstNegativeInteger(5, 2, [-8, 2, 3, -6, 10]));
