/**
 * https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
 * 
 * 山姆家有一棵蘋果樹和一棵橘子樹，果實累累。 
 * 請根據下面的信息，計算出山姆家的蘋果和橘子的數量。
 * 
 * 預計輸入:
 *const apples = [2, 3, -4];
  const oranges = [3, -2, -4];
 *
 預期結果: 1 2 
 * 
 */
const apples = [2, 3, -4];
const oranges = [3, -2, -4];
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let aNum = 0;
  let oNum = 0;
  for (let i = 0; i <= apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      aNum++;
    }
  }
  for (let i = 0; i <= oranges.length; i++) {
    if (oranges[i] + b <= t && oranges[i] + b >= s) {
      oNum++;
    }
  }
  console.log(aNum);
  console.log(oNum);
}

countApplesAndOranges(7, 10, 4, 12, apples, oranges);
