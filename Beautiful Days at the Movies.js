/**
 *https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true
 *美好得日子
 *
 * 預計輸入
 * beautifulDays(20, 23, 6)
 *
 * 預計結果 2
 */
function beautifulDays(i, j, k) {
  let beautiful = 0;

  for (let day = i; day <= j; day++) {
    const reverse = parseInt(day.toString().split("").reverse().join(""));

    if ((day - reverse) % k === 0) {
      beautiful++;
    }
  }
  return beautiful;
}

console.log(beautifulDays(20, 23, 6));
