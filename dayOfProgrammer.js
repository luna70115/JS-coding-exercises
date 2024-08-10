/**
 * https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true
 * 題目:程式設計師日
 *
 * 預計輸入: dayOfProgrammer(1800);dayOfProgrammer(1918);dayOfProgrammer(2015)
 *
 * 預計結果: //"12.09.1800" ; //"26.09.1918" ;  //"13.09.2015"
 */

function dayOfProgrammer(year) {
  if (year === 1918) {
    return `26.09.${year}`;
  } else if (
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 && year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
  ) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
}

console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2015));
