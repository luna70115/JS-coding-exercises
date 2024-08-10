/**
 *https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
 *
 *如果超過 1 種鳥類被發現的次數達到最大值，則傳回最小的鳥類 id。
 *
 *預計輸入: const arr = [1, 4, 4, 4, 5, 3];
 *
 *預計結果:4
 *
 *
 *
 */
const arr = [1, 4, 4, 4, 5, 3];

function migratoryBirds(arr) {
  let birdCount = new Array(arr.length).fill(0);

  for (let id of arr) {
    birdCount[id]++;
  }

  let max = 0;
  let result = 0;
  for (let i = 0; i <= birdCount.length; i++) {
    if (birdCount[i] > max) {
      max = birdCount[i];
      result = i;
    } else if (birdCount[i] === max && i < result) {
      result = i;
    }
  }
  return result;
}

console.log(migratoryBirds(arr));
