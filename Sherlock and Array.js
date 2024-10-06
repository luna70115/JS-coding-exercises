/**
https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true
*Sherlock an array 
 *
 * 預計輸入
  const arr = [1, 2, 3, 3];
 *
  預計輸出
 * NO
 */

function balancedSums(arr) {
  let total = arr.reduce((arr, pre) => {
    return arr + pre;
  });
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    let right = total - left - arr[i];
    if (left === right) {
      return "YES";
    }
    left += arr[i];
  }
  return "NO";
}

console.log(balancedSums([1, 2, 3]));
