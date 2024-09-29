/**
 *https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=true
 *陣列中，重複所有字串中的單字有幾種?
 *
 * 預計輸入
 *const arr = ["abcdde", "baccd", "eeabg"];
 *
 * 預計結果  2
 */

const arr = ["abcdde", "baccd", "eeabg"];

function gemstones(arr) {
  let elemnt = new Set(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    let rock = new Set(arr[i]);
    elemnt = new Set([...elemnt].filter((x) => rock.has(x)));
  }
  return elemnt.size;
}

console.log(gemstones(arr));
