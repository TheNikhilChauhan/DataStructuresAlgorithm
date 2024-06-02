// 204. Count prime

const countPrime = (n) => {
  if (n < 2) return 0;

  //Time complexity is: O(n)
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    //Time complexity for outer loop: O(root n)
    if (isPrime[i]) {
      //Time complexity for inner loop is: O(n/i): (n/2), (n/3), (n/5)..etc

      //Time complexity is: sum of harmonic series: O(n log log n)
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  //count true prime numbers
  let count = 0;
  //Time complexity: O(n)
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }
  return count;
};
//Total Time complexity: O(n) + O(n log logn) + O(n) = O(n log logn) dominates

console.log(countPrime(15));
console.log(countPrime(10));
console.log(countPrime(25));
console.log(countPrime(1));
