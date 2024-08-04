/**
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
 * 確定選手在賽季中打破得分最高和最低記錄的次數。
 *
 * 預計輸入
 * const score = [10, 5, 20, 20, 4, 5, 2, 25, 1]
 *
 * 預期結果 :["2 4"]
 */

const score = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let num = scores[0];
  let lowerst = scores[0];
  let highestScore = 0;
  let lowerstScore = 0;

  for (let i = 0; i <= scores.length; i++) {
    if (scores[i] > num) {
      num = scores[i];
      highestScore++;
    } else if (lowerst > scores[i]) {
      lowerst = scores[i];
      lowerstScore++;
    }
  }
  return [`${highestScore} ${lowerstScore} `];
}

console.log(breakingRecords(score));
