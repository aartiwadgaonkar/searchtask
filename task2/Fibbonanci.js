

function fibonacciSeries(n) {
  let fibSeries = [];
  let a = 0, b = 1, c;

  if (n < 1) {
    return fibSeries;
  }

  fibSeries.push(a);

  while (b <= n) {
    fibSeries.push(b);
    c = a + b;
    a = b;
    b = c;
  }

  return fibSeries;
}

console.log(fibonacciSeries(5)); // [0, 1, 1, 2, 3, 5]
console.log(fibonacciSeries(10));
console.log(fibonacciSeries(120)); 