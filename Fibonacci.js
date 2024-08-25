function fibonacciIterative(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence;
}

// Example usage:
const n = 10;
console.log(`The first ${n} numbers of the Fibonacci sequence are:`, fibonacciIterative(n));
