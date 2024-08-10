/**
 * https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true
 * 要求判斷兩個字串是否包含共同的子字串，如果包含，則返回 "YES"，否則返回 "NO"。
 *
 * 預計輸入: const s1 = "hello"; const s2 = "world";
 *
 * 預計結果:"YES"
 *
 */

const s1 = "hello";
const s2 = "world";

function twoStrings(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  return [...set1].some((item) => set2.has(item)) ? "YES" : "NO";
}

console.log(twoStrings(s1, s2));
