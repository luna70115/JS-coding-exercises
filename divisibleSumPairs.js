/**
 *https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
 *陣列中兩數字的總和，能被k整除總共有幾個?
 *
 *預計輸入const ar = [1, 3, 2, 6, 1, 2]; const n = 6; const k = 3;
 *
 *預計結果: 5
 *
 */

const ar = [1, 3, 2, 6, 1, 2];
const n = 6;
const k = 3;
function divisibleSumPairs(n, k, ar) {
  let num = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        num++;
      }
    }
  }
  return num;
}

console.log(divisibleSumPairs(6, 3, ar));
