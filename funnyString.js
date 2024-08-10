/**
 *https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true
 *有趣的字符串
 *
 *預計輸入: const s = "acxz";
 *
 *預期結果:"Funny"
 *
 */

const s = "acxz";
function funnyString(s) {
  const newS = s.split("").map((item) => item.charCodeAt());
  const n = [...newS].reverse();

  for (let i = 0; i < newS.length - 1; i++) {
    if (Math.abs(newS[i] - newS[i + 1]) !== Math.abs(n[i] - n[i + 1])) {
      return "Not Funny";
    }
  }
  return "Funny";
}
