// Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//solution one --> double loop O(log(n))**2: first loop to find all factors, second loop to find all prime factors
const allFactors = (n) => {
  let factors = [];

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      factors.push(n / i);
    }
  }
  return factors;
};

const solution = (num) => {
  let factors = allFactors(num);
  let result = 0;
  factors.map((num) => {
    if (allFactors(num).length === 0) result = num;
  });

  console.log(result);
};
