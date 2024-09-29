/**
 * https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
 * 
 *
 * 預計輸出
 * const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;
 *
 * 預計結果  5
 */

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

function bonAppetit(bill, k, b) {
  const total = bill.reduce((acc, current) => {
    acc += current;
    return acc;
  }, 0);

  const average = (total - bill[k]) / 2;

  if (average === b) {
    return "Bon Appetit";
  } else {
    return b - average;
  }
}
console.log(bonAppetit(bill, k, b));
