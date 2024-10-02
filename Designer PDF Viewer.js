/**
 *https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true
 *找出字串中相對應的最高高度，乘上字串長度
 *
 * 預計輸入
const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
 * 預計結果 28
 */

const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];

const word = "zaba";
function designerPdfViewer(h, word) {
  let maxHigth = 0;
  for (let i = 0; i < word.length; i++) {
    const wordIndex = word.charCodeAt(0) - `a`.charCodeAt(0);
    maxHigth = Math.max(maxHigth, h[wordIndex]);
  }
  const result = maxHigth * word.length;
  return result;
}

console.log(designerPdfViewer(h, word));
