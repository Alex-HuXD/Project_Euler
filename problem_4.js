// Largest palindrome product
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

//helper function to check if is palindrome
const palindrome = (num) => {
  let str = String(num);
  return str === str.split("").reverse().join("");
};

const largest = (num) => {
  let result = [];
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (palindrome(i * j)) {
        result.push(i * j);
        break;
      }
    }

    if (result.length === 2) break;
  }

  console.log(result);
  return Math.max(...result);
};

largest(999);
