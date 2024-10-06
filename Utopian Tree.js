/**
 *https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true
 *植物生長分為兩周期，春天植物長兩倍，夏季植物長一米，經過數周期後，判斷植物長幾米?
 *
 * 預計輸入
utopianTree(5)
 *
 * 預計結果 14
 */

function utopianTree(n) {
  let higth = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      higth *= 2;
    } else {
      higth += 1;
    }
  }

  return higth;
}

console.log(utopianTree(5));
