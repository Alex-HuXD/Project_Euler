// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// solution one --> loop
const solution = (limit) => {
  let result = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
};

//solution two --> increment only mutiple of 3 and 5
const solution1 = (limit) => {
  let result = 0;
  let times = 1;

  while (times * 3 <= limit - 1 || times * 5 <= limit - 1) {
    if (times * 3 <= limit - 1) {
      result += times * 3;
    }
    if (times * 5 <= limit - 1 && (times * 5) % 3 !== 0) {
      //only include the num once if it is multiple of both 3 and 5
      result += times * 5;
    }
    times++;
  }

  return result;
};
