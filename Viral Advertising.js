/**
 *https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true
 *廣告投放推送
 *
 * 預計輸入
 viralAdvertising(5)
 *
 * 預計結果 24
 */

function viralAdvertising(n) {
  let shared = 5;
  let cumulative = 0;

  for (let i = 1; i <= n; i++) {
    const count = Math.floor(shared / 2);
    shared = count * 3;
    cumulative += count;
  }

  return cumulative;
}

console.log(viralAdvertising(5));
