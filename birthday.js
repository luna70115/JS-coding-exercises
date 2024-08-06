/**
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
 * 
 * 莉莉的弟弟喜歡巧克力棒，每個巧克力棒由一系列標記著整數的方塊組成。
 * 每個整數代表巧克力棒的一個部分的數量。莉莉想知道她能以多少種方式選擇巧克力棒的一段，
 * 使得這段的方塊數量總和等於她弟弟的生日。
 * 莉莉必須要選擇一段連續的方塊，其長度等於她弟弟的出生月份。

例如，如果巧克力棒有 `s = [2, 2, 1, 3, 2]`，她弟弟的生日是 `d = 4` 且出生月份是 `m = 2`，她可以選擇以下的方塊：

- `s[0] + s[1] = 2 + 2 = 4`
- `s[1] + s[2] = 2 + 1 = 3`
- `s[2] + s[3] = 1 + 3 = 4`
- `s[3] + s[4] = 3 + 2 = 5`
 * 
 * 
 * * 預計輸入:
 * const s = [4];
   const d = 4;
   const m = 1
 * 
 * 
 * 預期結果: 1
 */

const s = [4];
const d = 4;
const m = 1;

function birthday(s, d, m) {
  let sum = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let currentSum = 0;
    for (let j = 0; j < m; j++) {
      currentSum += s[i + j];
    }
    if (currentSum === d) {
      sum++;
    }
  }

  return sum;
}
console.log(birthday(s, d, m));
