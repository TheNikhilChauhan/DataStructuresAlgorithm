// count frequency of string character

//we need a mapping based structure i.e. object

function frequencyOfChar(str) {
  let frequencyMap = {};
  for (let char of str) {
    if (frequencyMap[char]) {
      frequencyMap[char] += 1;
    } else {
      frequencyMap[char] = 1;
    }
  }
  return frequencyMap;
}

let str = "Javascripts";
console.log(frequencyOfChar(str));
