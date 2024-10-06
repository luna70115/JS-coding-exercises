/**
 *https://www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true
 *將字串轉換為它的回文字串的最少步數
 *
 * 預計輸入
const s = "abc";
 *
 * 預計結果 2
 */

const s = "abc";
function theLoveLetterMystery(s) {
  let sum = 0;
  const n = s.length;
  const half = Math.floor(n / 2);
  for (let i = 0; i < half; i++) {
    const left = s[i];
    const rigth = s[n - i - 1];
    sum += Math.abs(left.charCodeAt(0) - rigth.charCodeAt(0));
  }
  return sum;
}
console.log(theLoveLetterMystery(s));
