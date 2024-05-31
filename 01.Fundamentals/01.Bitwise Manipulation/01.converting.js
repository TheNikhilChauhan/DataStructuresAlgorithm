//converting decimal to binary

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  }

  let num = "";
  while (decimal > 0) {
    num = (decimal & 1) + num;
    decimal = decimal >> 1;
  }
  return num;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(23));

/* function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  }

  let num = "";
  while (decimal > 0) {
    num = (decimal % 2) + num;
    decimal = Math.floor(decimal / 2);
  }
  return num;
}

console.log(decimalToBinary(10)); */
