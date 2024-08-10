/**
 * https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
 * 題目:請找出滿足以下兩個條件的所有整數
 *
 * 預計輸入const a = [2, 4]; const b = [16, 32, 96];
 *
 * 預計結果: 3
 */

const a = [2, 4];
const b = [16, 32, 96];
function getTotalX(a, b) {
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  let sum = 0;
  for (let x = maxA; x <= minB; x++) {
    if (a.every((num) => x % num === 0) && b.every((num) => num % x === 0)) {
      sum++;
    }
  }

  return sum;
}
console.log(getTotalX(a, b));
