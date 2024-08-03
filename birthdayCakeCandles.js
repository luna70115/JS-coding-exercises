/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 *
 * 預計輸入
 * [4, 4, 1, 3]
 *
 * 預期結果: 2
 *
 *
 */

const candles = [4, 4, 1, 3];

function birthdayCakeCandles(arr) {
  let max = 0;
  let candleNum = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
      candleNum = 1;
    } else if (num === max) {
      candleNum++;
    }
  }
  return candleNum;
}
console.log(birthdayCakeCandles(candles));
