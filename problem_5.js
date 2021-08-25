// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const primeFactors = (num) => {
  let result = [];

  let primeArr = new Array(num).fill(true);

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (primeArr[i] === false) continue;
    let temp = 2;
    while (i * temp < num) {
      primeArr[i * temp] = false;
      temp++;
    }
  }

  primeArr.map((num, i) => {
    if (num === true && i > 1) result.push(i);
  });
  return (result = [...result, num]);
};

const smallestNumber = (num) => {
  let map = {};
  let range = primeFactors(num);

  for (let i = 2; i <= num; i++) {
    let temp = {};
    let arrs = [];
    let remain = i;
    let idx = 0;
    while (remain !== 1) {
      if (remain % range[idx] === 0) {
        remain /= range[idx];
        arrs.push(range[idx]);
      } else {
        idx++;
      }
    }

    arrs.map((num) => {
      temp[num] ? temp[num]++ : (temp[num] = 1);
    });

    for (let num in temp) {
      map[num]
        ? (map[num] = Math.max(map[num], temp[num]))
        : (map[num] = temp[num]);
    }
  }

  console.log(map);

  let result = 1;

  for (let num in map) {
    result *= Number(num) ** map[num];
  }

  console.log(result);
};
