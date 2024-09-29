/**
 *https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=true
 *針對以下條件，判斷教授是否開課
 *
 * 預計輸入
const a = [-1, -3, 4, 2];
const k = 3;
 *
 * 預計結果  "YES"
 */

const a = [-1, -3, 4, 2];
const k = 3;

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count++;
    }
  }
  return k <= count ? "NO" : "YES";
}
console.log(angryProfessor(k, a));
