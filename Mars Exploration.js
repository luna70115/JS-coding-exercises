/**
 *https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
 *SOS循環中的錯字有幾個?
 *
 * 預計輸入
 marsExploration("SOSSPSSQSSOR")
 *
 * 預計結果 3
 */
function marsExploration(s) {
  let num = 0;
  const sos = "SOS";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== sos[i % 3]) {
      num++;
    }
  }

  return num;
}

console.log(marsExploration("SOSSPSSQSSOR"));
