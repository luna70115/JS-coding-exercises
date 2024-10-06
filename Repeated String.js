/**
 *https://www.hackerrank.com/challenges/repeated-string/problem
 *a總共出現的次數?
 *
 * 預計輸入
 const s = "aba";
 const n = 10;
 *
 * 預計結果 7
 */

const s = "aba";
const n = 10;

function repeatedString(s, n) {
  const arrA = s.split("").filter((item) => item === "a").length;
  const findA = Math.floor(n / s.length);
  const redundant = n % s.length;
  const addNewA = s
    .split("")
    .slice(0, redundant)
    .filter((item) => item === "a").length;

  return arrA * findA + addNewA;
}

console.log(repeatedString(s, n));
