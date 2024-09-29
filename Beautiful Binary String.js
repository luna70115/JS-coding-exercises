/**
 *https://www.hackerrank.com/challenges/beautiful-binary-string/problem?isFullScreen=true
 *在字串中找有多少個 "010" 子字串
 *
 * 預計輸入
 *const arr = ["abcdde", "baccd", "eeabg"];
 *
 * 預計結果  3
 */
const b = "0100101010";

function beautifulBinaryString(b) {
  let count = 0;
  let i = 0;
  while (i < b.length - 2) {
    if (b.substring(i, i + 3) === "010") {
      count++;
      i += 3;
    } else {
      i++;
    }
  }
  return count;
}

console.log(beautifulBinaryString(b)); //3
