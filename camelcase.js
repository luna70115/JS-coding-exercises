/**
 * https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true
 * 題目:有幾個單字?
 *
 * 預計輸入: const s = "saveChangesInTheEditor";
 *
 * 預計結果:5
 *
 */

const s = "saveChangesInTheEditor";

function camelcase(s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      num++;
    }
  }
  return num + 1;
}

console.log(camelcase(s));
