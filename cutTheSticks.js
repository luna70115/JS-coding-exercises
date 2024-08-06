/**
 * https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true
 * 題目:
 * 給你N根長度不相等的木棍。有一種切割操作：
 * 把所有的木棍都切成最短的高度，並記錄下切下來的木棍數，
 * 丟掉切下的部分。重複這種切割操作，直到所有的木棍都被丟棄。
 * 你需要輸出每次切割下記錄的木棍數。
 *
 * 預期輸出:const arr = [5, 4, 4, 2, 2, 8];
 *
 * 預期結果:[6,4,2,1]
 */

const arr = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
  let result = [];

  while (arr.length) {
    let min = Math.min(...arr);
    result.push(arr.length);
    arr = arr.map((x) => x - min).filter((x) => x > 0);
  }

  return result;
}

console.log(cutTheSticks(arr));
