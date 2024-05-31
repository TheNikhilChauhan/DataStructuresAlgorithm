// program to find out odd and even
// using bit wise manipulation is faster

function OddEven(num) {
  if (num === 0) {
    return "Neither odd nor even";
  } else if ((num & 1) === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

console.log(OddEven(2));
