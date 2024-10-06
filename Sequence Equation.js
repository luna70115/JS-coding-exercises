/**
https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true
 *HackerRank 的 "排列方程式”
 *
 * 預計輸入
  const p = [5, 2, 1, 3, 4];
 *
 * 預計結果[4,2,5,1,3]
 */

const p = [5, 2, 1, 3, 4];
function permutationEquation(p) {
  let result = [];

  for (let i = 1; i <= p.length; i++) {
    const firstIndex = p.indexOf(i) + 1;
    const secondIndex = p.indexOf(firstIndex) + 1;
    result.push(secondIndex);
  }
  return result;
}

console.log(permutationEquation(p));
