/**
https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true
*找出arr中間數
 *
 * 預計輸入
 * const arr = [0, 1, 2, 4, 6, 5, 3];
  預計輸出
 * 3
 */

const arr = [0, 1, 2, 4, 6, 5, 3];
function findMedian(arr) {
  const newarr = arr.sort((a, b) => a - b);
  const length = Math.ceil(arr.length / 2);
  return newarr[length - 1];
}

console.log(findMedian(arr));
