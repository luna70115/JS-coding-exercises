/**
 * https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true
 * 找出一個給定數字中，能夠整除該數字本身的數字的個數。
 *
 * 預計輸入:  findDigits([1012])
 *
 * 預計結果:3
 */

function findDigits(n) {
  const newN = n.toString().split("");

  let count = 0;
  for (let i = 0; i < newN.length; i++) {
    let digits = parseInt(newN[i]);
    if (n % digits === 0) {
      count++;
    }
  }
  return count;
}

findDigits([1012]); //3
