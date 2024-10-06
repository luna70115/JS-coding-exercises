/**
 *https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true
 *找出拿到最後一顆糖果的囚犯椅子號碼
 *
 * 預計輸入
saveThePrisoner(4, 6, 2)
 *
 * 預計結果 3
 */
function saveThePrisoner(n, m, s) {
  const result = (s - 1 + m) % n;
  return result === 0 ? n : result;
}

console.log(saveThePrisoner(4, 6, 2)); //3
