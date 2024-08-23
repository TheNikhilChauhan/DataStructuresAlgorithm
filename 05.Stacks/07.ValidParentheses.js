// check if the parenthesis are valid or not
// do not use any other data structure

function isValid(str) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    //for opening character
    if (map[char]) {
      stack.push(char);
    }

    //for closing character
    else {
      let topElement = stack.pop();
      if (map[topElement] !== char) {
        return false;
      }
    }
  }
  //if stack is empty
  return stack.length === 0;
}

console.log(isValid("[(){()()}]"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
