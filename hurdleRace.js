/**
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true
 * 
 * 玩家角色參加跨欄比賽，障礙物高度不一。角色有一個最大跳躍高度。
 * 角色可以喝魔法藥水，每喝一劑增加一單位跳躍高度。
 * 問角色需要喝多少劑藥水才能跳過所有障礙物。
 * 如果角色已能跳過所有障礙物，則返回 0。
 * 
 * 預計輸出
 * const k = 4;
    const height = [1, 6, 3, 5, 2];
 * 
 * 預計結果:2
 */
const k = 4;
const height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
  const max = height.reduce((a, c) => (c < a ? a : c));
  return max > k ? max - k : 0;
}

console.log(hurdleRace(k, height));
