/**
 * https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
 * 兩隻袋鼠同時移動跳躍是否還能相遇?
 *
 * 預計輸入
 * kangaroo(1571, 4240, 9023, 4234)
 *
 * 預期結果:"YES"
 *
 *
 *
 */

function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2) {
    return v1 === v2 ? "YES" : "NO";
  }
  let n = (x2 - x1) / (v1 - v2);
  return n >= 0 && Number.isInteger(n) ? "YES" : "NO";
}

// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(1571, 4240, 9023, 4234));
