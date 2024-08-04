/**
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 * 给定 5 个正整数，求 5 个整数中 4 个整数相加的最小值和最大值
 *
 * 預計輸入
 * const arr = [1, 2, 3, 4, 5]
 *
 * 預期結果 :"10 14"
 *
 */

const arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  let total = 0;
  let max = arr[0];
  let min = arr[0];

  for (let num of arr) {
    total += num;
    if (num > max) max = num;
    if (num < min) min = num;
  }
  const maxSum = total - min;
  const minSum = total - max;
  return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum(arr));
