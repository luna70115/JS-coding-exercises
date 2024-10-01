/**
 *https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
 *找出最物超所值的配對方案
 *
 * 預計輸入
const keyboards = [3, 1];
const drives = [5, 2, 8];
const b = 10;
 *
 * 預計結果 9
 */

const keyboards = [3, 1];
const drives = [5, 2, 8];
const b = 10;

function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const total = keyboards[i] + drives[j];
      if (total <= b && total > max) {
        max = total;
      }
    }
  }
  return max;
}

console.log(getMoneySpent(keyboards, drives, b)); //9
