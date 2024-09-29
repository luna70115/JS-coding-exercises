/**
https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true *
 * 預計輸出
 * const n = 7;
const arr = [1, 2, 1, 2, 1, 3, 2];
 *
 * 預計結果  2
 */

const n = 7;
const arr = [1, 2, 1, 2, 1, 3, 2];

function sockMerchant(n, arr) {
  let total = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let color = arr[i];
    if (total[color]) {
      total[color]++;
    } else {
      total[color] = 1;
    }
  }
  for (let key in total) {
    sum += Math.floor(total[key] / 2);
  }
  return sum;
}

console.log(sockMerchant(n, arr)); //2
