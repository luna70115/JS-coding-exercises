/**
 * https://leetcode.com/problems/counter/description/
 * 閉包練習
 *
 *
 *
 */

const createCounter = function (n) {
  let num = n;
  return function () {
    return num++;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());

const counter2 = createCounter(-2);
console.log(counter2());
console.log(counter2());
