/**
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
 * 
 * 
 * 預計輸出
 *   
  console.log(catAndMouse(1, 2, 3));
  console.log(catAndMouse(1, 3, 2));
  
 * 
 * 預計結果:
 * //"Cat B"
 * //"Mouse C"
 */

function catAndMouse(x, y, z) {
  if (Math.abs(z - x) === Math.abs(z - y)) {
    return "Mouse C";
  } else if (Math.abs(z - x) > Math.abs(z - y)) {
    return "Cat B";
  } else {
    return "Cat A";
  }
}

console.log(catAndMouse(1, 2, 3)); //"Cat B"
console.log(catAndMouse(1, 3, 2)); //"Mouse C"
