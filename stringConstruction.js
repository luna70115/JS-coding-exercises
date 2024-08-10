/**
 * https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true
 * 字串構造（String Construction）
 *
 * 預計輸入: const s = "abcd";
 *
 * 預計輸出: 4
 */

const s = "abcd";

function stringConstruction(s) {
  const sArr = s.split("");
  let p = [];
  for (let i = 0; i < sArr.length; i++) {
    if (!p.includes(sArr[i])) {
      p.push(sArr[i]);
    }
  }
  return p.length;
}

function stringConstruction(s) {
  const uniqueChars = new Set(s);
  return uniqueChars.size;
}
stringConstruction(s);
