// sort function
let arr = [1, 10, 100, 9, 1000, 11, 17, 13, 2, 14, 3];

// arr.sort();
//it sorts the given array

arr.sort(function (a, b) {
  //this function is a comparator
  return a - b;
  //if a < b -> a-b will be negative -> if cmp function gives a negative then a is placed before b. (a<b)

  // if a > b -> a - b will be positive -> if cmp function gives positive then b is placed before a. (a>b)
});

//sort function takes a comparator function as an argument

console.log(arr);
