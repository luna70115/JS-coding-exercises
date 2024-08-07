/**
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
 * 題目:如果巧克力棒有 `s = [2, 2, 1, 3, 2]`，
 * 她弟弟的生日是 `d = 4` 且出生月份是 `m = 2`，
 * 她可以選擇以下的方塊：
- `s[0] + s[1] = 2 + 2 = 4`
- `s[1] + s[2] = 2 + 1 = 3`
- `s[2] + s[3] = 1 + 3 = 4`
- `s[3] + s[4] = 3 + 2 = 5`
 * 
 * 預計數入:
 * const s = [4];
   const d = 4;
   const m = 1;
 * 
 * 預計結果:1
 * 
 */

const s = [4];
const d = 4;
const m = 1;

function birthday(s, d, m) {
  let sum = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let currentSum = 0;
    for (let j = 0; j < m; j++) {
      currentSum += s[i + j];
    }
    if (currentSum === d) {
      sum++;
    }
  }

  return sum;
}
console.log(birthday(s, d, m));
