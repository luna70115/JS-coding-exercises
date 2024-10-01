/**
 *https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
 *總共爬越幾座山脈?
 *
 * 預計輸入
const path = [`D`, `D`, `U`, `U`, `D`, `D`, `U`, `D`, `U`, `U`, `U`, `D`];
const steps = path.length;
 *
 * 預計結果 2
 */

const path = [`D`, `D`, `U`, `U`, `D`, `D`, `U`, `D`, `U`, `U`, `U`, `D`];
const steps = path.length;
function countingValleys(steps, path) {
  let mountain = 0;
  let walk = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      walk++;
      if (walk === 0) {
        mountain++;
      }
    } else {
      walk--;
    }
  }

  return mountain;
}

console.log(countingValleys(steps, path));
