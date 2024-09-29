/**
 *https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
 *翻書翻到指定頁數，可往前翻和往後翻，回傳翻最快的頁數是多少?
 *
 * 預計輸入
const n=5;
const p=3;
 *
 * 預計結果 1
 */

const n = 5;
const p = 3;
function pageCount(n, p) {
  const front = Math.floor(p / 2);
  const back = Math.floor(n / 2 - front);
  return Math.min(front, back);
}

console.log(pageCount(n, p)); //1
