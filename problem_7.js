// 10001st prime

const nthPrime = (n) => {
  let count = 0;
  let num = 2;
  let prime = 0;
  while (count != n) {
    if (isPrime(num)) {
      prime = num;
      count++;
    }
    num++;
  }

  console.log(count, prime);
};

function isPrime(num) {
  let factors = [1, num];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i === Math.sqrt(num)) {
        factors.push(i);
      } else {
        factors.push(i);
        factors.push(num / i);
      }
    }
  }

  return factors.length === 2;
}

nthPrime(10001);
