# Higher Order Function

<p>These are functions that depends and operates on other function. Higher Order Functions takes another function as an argument or return a function and then executes the logic.</p>

<p>Custom Higer Order Function</p>
<ul>
<li><h3>Map</h3></li>
<p>Map is a higher order function available with arrays.</p>
<p>It takes a function as an argument -> f,  and returns an array in which every value is actually populated by calling function f with original array element as argument.</p>
<p>Every element of the original array is passed one by one in the argument function f</p>
<p>Whatever is the output for each individual element, we populate that output in an array.</p>
<p>Map internally iterates/loops over every element of the given original array, pass that element in the argument function f and then store the returned value inside an array.</p>

<h4>When to use maps?</h4>
<p>In any situation when we have to do an operation on every element of the array and store the result of each operation, map can be a good option.
Ex: array of product objects.</p>

<li><h3>Filter</h3></li>
<p>Filter is also a HOF</p>
<p>Filter also loops over the array element</p>
<p>There is one special thing about filter, i.e. the argument function f which we have to pass inside filter should always return a boolean, otherwise output will be converted to a boolean</p>
<p>Filter loops over every element, passes that element in the argument function and then if the output of the function call is true, then it stores the original element in a new array other doesn't add element to the array</p>

<li><h3>Reduce</h3></li>
<p>Reduce is a higher order function available for arrays.</p>
<p>Reduce also takes a function f as an argument</p>
<p>What reduce does is, it goes one by one to every element of the array, say the current element is arr[i], then reduce will pass this element to the function f, and accumulate the result of further function calls with this particular result.</p>
<p></p>
<p></p>
</ul>
