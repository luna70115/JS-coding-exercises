/**
 *https:www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
 *將兩個陣列內的數字進行比較，大者得一分，同分則不計分，依序累積，最後顯出得分結果。
 *
 *預期輸入
 *[77, 63, 34, 777, 888]
 *[43, 52, 61, 444, 666]
 *
 * 預期結果:41
 *
 */

const a = [77, 63, 34, 777, 888];
const b = [43, 52, 61, 444, 666];

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aScore++;
    } else if (a[i] < b[i]) {
      bScore++;
    }
  }

  return `${aScore}${bScore}`;
}

console.log(compareTriplets(a, b));
