/**
 * https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
 * 由左至右的對角線&右到左的對角線，計算他們的絕對差異值
 * 預期輸入
 * [11, 2, 4],
 * [4, 5, 6],
 * [10, 8, -12],
 *
 * 預期結果 : 15
 */

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let forward = 0;
  let reverse = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    forward += arr[i][i];
    reverse += arr[i][length - 1 - i];
  }

  return Math.abs(forward - reverse);
}

console.log(diagonalDifference(arr));
