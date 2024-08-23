function hasRedundantBrackets(exp) {
  //((a+b) + c)
  const stack = [];

  for (let char of exp) {
    // console.log(char);
    if (
      char === "(" ||
      char === "+" ||
      char === "-" ||
      char === "*" ||
      char === "/"
    ) {
      stack.push(char);
    } else {
      if (char === ")") {
        let isRedundant = true;

        while (stack.length > 0 && stack[stack.length - 1] !== "(") {
          let topElement = stack.pop();
          if (
            topElement === "+" ||
            topElement === "-" ||
            topElement === "*" ||
            topElement === "/"
          ) {
            isRedundant = false;
          }
        }
        stack.pop();

        if (isRedundant) {
          return true;
        }
      }
    }
  }
  return false;
}

let x = hasRedundantBrackets(`((a + b) + c)`);
// let x = hasRedundantBrackets(`((a + b))`);
if (x === false) {
  console.log("It does not have redundant brackets");
} else {
  console.log("It has redundant brackets");
}
