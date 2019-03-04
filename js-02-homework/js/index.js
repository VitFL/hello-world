const n = parseInt(prompt('Enter Fibonacci number'));
if (Number.isNaN(n) || n <= 0) {
  alert('Input is not correct, refresh a page and enter a positive number');
} else {
  alert('Result of Loop Function: ' + fibonacciLoop(n) + '\nResult of Recursive Function: ' + fibonacciRecursion(n) + '\nResult of Array Function: ' + fibonacciArr(n) + '\nResult of Binet Function: ' + fibonacciBinet(n));
}

function fibonacciLoop(num) {
  let first = 1;
  let second = 1;
  let next;
  if (num < 3) return 1;
  for (let i = 3; i <= n; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
}

function fibonacciRecursion(num) {
  if (num < 3) return 1;
  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

function fibonacciArr(num) {
  let fibNums = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    fibNums.push(fibNums[i - 2] + fibNums[i - 1]);
  }
  return fibNums[n - 1];
}

function fibonacciBinet(number) {
  const sqrtOfFive = Math.sqrt(5);
  const Phi = (1 + sqrtOfFive) / 2;
  const phi = (1 - sqrtOfFive) / 2;
  return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqrtOfFive);
}
