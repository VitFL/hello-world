const n = parseInt(prompt('Enter Fibonacci number'));
if (Number.isNaN(n)) {
  alert('Input is not correct, click F5 and enter a number');
} else {
  alert('Result of Loop Function: ' + fibonacciLoop(n) + '\nResult of Recursive Function: ' + fibonacciRecursion(n) + '\nResult of Array Function: ' + fibonacciArr(n) + '\nResult of Binet Function: ' + fibonacciBinet(n));
}

function fibonacciLoop(num) {
  let first = 1;
  let second = 1;
  let next;

  for (let i = 3; i <= n; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
}

function fibonacciRecursion(num) {
  if (num < 2) return num;
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
  var sqrtOfFive = Math.sqrt(5);
  var Phi = (1 + sqrtOfFive) / 2;
  var phi = (1 - sqrtOfFive) / 2;
  return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqrtOfFive);
}
