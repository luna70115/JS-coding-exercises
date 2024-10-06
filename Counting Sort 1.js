/**
 *https://www.hackerrank.com/challenges/countingsort1/problem?isFullScreen=true
 *計算每個數字在數組中出現的次數
 *
 * 預計輸入 const arr = [1, 1, 1, 2, 3];

 */

const arr = [1, 1, 1, 2, 3];

function countingSort(arr) {
  const sum = new Array(100).fill(0);

  for (let num of arr) {
    sum[num]++;
  }

  return sum;
}

console.log(countingSort(arr));
