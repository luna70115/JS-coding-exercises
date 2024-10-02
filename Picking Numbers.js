/**
 *https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true
 *找出陣列中，任兩個元素之間的絕對差===0或===1
 *
 * 預計輸入
const a = [4, 6, 5, 3, 3, 1];
 *
 * 預計結果 3
 */

const a = [4, 6, 5, 3, 3, 1];

function pickingNumbers(a) {
  let bigLength = 0;
  a.forEach((elem) => {
    const num = a.filter(
      (numElem) => elem - numElem === 0 || elem - numElem === 1
    );
    if (num.length > bigLength) bigLength = num.length;
  });
  return bigLength;
}

console.log(pickingNumbers(a));
