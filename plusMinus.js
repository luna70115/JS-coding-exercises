/**
 * https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
 *
 * 預計輸入
 * const arr = [-4, 3, -9, 0, 4, 1];
 *
 * 預期結果
 *"0.500000"
"0.333333"
"0.166667"
 *
 */

const arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / n).toFixed(6));
  console.log((negative / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

plusMinus(arr);
