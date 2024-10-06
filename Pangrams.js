/**
 *https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true
 *判斷一個字串是否是「全字母句」
 *
 * 預計輸入
  pangrams("We promptly judged antique ivory buckles for the prize   ")
 *
 * 預計結果 "not pangram"
 */

function pangrams(s) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const sLower = s.toLowerCase();

  for (let word of abc) {
    if (!sLower.includes(word)) {
      return "not pangram";
    }
  }
  return "pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the prize   ")
);
