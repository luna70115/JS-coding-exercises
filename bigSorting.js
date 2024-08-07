/**
 * https://www.hackerrank.com/challenges/big-sorting/problem?isFullScreen=true
 * 由小到大排序(考慮到長度問題)
 *
 * 預計輸出
 * const arr = [1, 200, 10, 111, 100, 2];
 *
 * 預計結果  [1, 2, 10, 100, 111, 200]
 */

const arr = [1, 2, 10, 100, 111, 200];

function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
}
console.log(bigSorting(arr));
