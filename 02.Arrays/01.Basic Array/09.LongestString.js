//Find the longest string

function longestString(arr) {
  let longestString = "";

  for (let i = 0; i < arr.length; i++) {
    let currentString = arr[i];

    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  return longestString;
}

let str = ["apple", "banana", "mango"];
console.log(longestString(str));
