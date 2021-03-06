// Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

//solution one --> bottom up approach
const solution = (n) => {
  let a = 1;
  let b = 2;
  let sum = 2;

  while (a + b <= n) {
    let temp = a + b;
    temp % 2 === 0 ? (sum += temp) : temp;
    a = b;
    b = temp;
  }

  console.log(sum);
};
