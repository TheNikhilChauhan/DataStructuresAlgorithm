// HOF -> consumes some function as an argument
// the function which you pass as an argument while calling the HOF is called as callback function.

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(10, function exec() {
  console.log("I am also executed");
});

/* **** another example **** */
setTimeout(function exec() {
  console.log("Running after sometime");
}, 4000);
