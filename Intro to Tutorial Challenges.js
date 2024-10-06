/**
 *https://www.hackerrank.com/challenges/tutorial-intro/problem?isFullScreen=true
 *找出指定數字的index
 *
 * 預計輸入
  const arr = [1, 4, 5, 7, 9, 12];
  const V = 4;

 *
 * 預計結果 1
 */

const arr = [1, 4, 5, 7, 9, 12];
const V = 4;

function introTutorial(V, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === V) {
      return i;
    }
  }
}

console.log(introTutorial(V, arr));
