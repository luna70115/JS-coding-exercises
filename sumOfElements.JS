/**
 * https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
 * 給定一個整數數組，求其元素和。
 *
 * 預計輸入
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * 預期結果 :55
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfElements(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
}

console.log(sumOfElements(arr));

/**另一種解法 */

function sumOfElements(arr) {
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return total;
}

console.log(sumOfElements(arr));
