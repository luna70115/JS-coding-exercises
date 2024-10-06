/**
https://www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
*在A,B陣列中，找出A陣列與B陣列相比，A缺少那些數字
 *
 * 預計輸入
 * const arr = [7, 2, 5, 3, 5, 3];
 * const brr = [7, 2, 5, 4, 6, 3, 5, 3];
 *
  預計輸出
 * [4,6]
 */

const arr = [7, 2, 5, 3, 5, 3];
const brr = [7, 2, 5, 4, 6, 3, 5, 3];
function missingNumbers(arr, brr) {
  let obj = {};
  let missing = [];
  for (let num of brr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (let num of arr) {
    obj[num]--;
  }

  for (let num in obj) {
    if (obj[num] > 0) {
      missing.push(num);
    }
  }
  return missing;
}
console.log(missingNumbers(arr, brr));
