/**
 * https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true
 *
 * 如果相鄰得字母相同則選擇刪除，總計刪除的字母有幾個。
 *
 * 預計輸入: const s = "AAAA";
 *
 * 預計輸出:3
 *
 */

const s = "AAAA";

function alternatingCharacters(s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      num++;
    }
  }
  return num;
}
console.log(alternatingCharacters(s));
