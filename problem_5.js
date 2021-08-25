// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//solution one ==> to find the smallest common divis,
// count all the highest term prime factors in the range and multiple them to get the result
//example 1- 10
//    2       3       4       5      6      7       8      9      10
//   / \     / \     / \     / \    / \    / \     / \     /\     / \
//  1   2   1   3   2   2   1   5  2  3   1  7   2   4    3 3   2   5
//                                                   / \
//                                                  2   2

//  2        3      2^2      5     2*3     7       2^3    3^2    2*5

//hiest term 2 is 8 = 2^3, 3 is 9=3^2, 5 is 5, 7 is 7
//result = 2^3 * 3^2 * 5 * 7 = 2520

const primeFactors = (num) => {
  // sieve of eratosthenes to find all prime numbers within a range of numbers
  let result = [];
  let primeArr = new Array(num).fill(true);

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (primeArr[i] === false) continue;
    let term = 2;
    while (i * term < num) {
      primeArr[i * term] = false;
      term++;
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

  for (let i = 2; i <= num; i++) {   //starting from 2 because 1 mutiple by any num equals num itself
    let temp = {};                   //   key=prime factor, value = terms 
    let arrs = [];                   // break down to smallest prime factors
    
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

    // num 2={2:1} 3={3:1} 4={2:2} ... 20={2,2,5}
    arrs.map((num) => {                            
      temp[num] ? temp[num]++ : temp[num] = 1;
    });

    //compare with final map, replace exsiting prime factor with highest tearm or add it into map
    //if not included yet.
    for (let num in temp) {                           
      map[num]
        ? (map[num] = Math.max(map[num], temp[num]))
        : (map[num] = temp[num]);
    }
  }

  let result = 1;

  for (let num in map) {
    result *= Number(num) ** map[num];
  }

  console.log(result);
};
