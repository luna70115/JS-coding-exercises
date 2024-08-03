/**
 *https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
 *計算並列印數組中元素的總和
 *預期輸入
 * [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
 *
 *預期結果:5000000015
 */

const num = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  return num.reduce((acc, currentValue) => {
    acc += currentValue;
    return acc;
  }, 0);
}

console.log(aVeryBigSum(num));
