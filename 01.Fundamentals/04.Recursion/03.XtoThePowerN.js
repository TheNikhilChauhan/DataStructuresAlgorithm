// x to the power n

const powerOfNum = (num, power) => {
  if (power === 0) return 1;
  if (num === 1) return x;
  return num * powerOfNum(num, power - 1);
};

console.log(powerOfNum(2, 4));
console.log(powerOfNum(5, 4));
