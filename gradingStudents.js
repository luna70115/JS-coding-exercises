/**
 * https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
 * 
 * HackerLand 大學正在實施一種新的學生成績計算方法。
 * 學校的每一位學生都會根據他們的成績來獲得一個數字分數。
 * 對於每門課程的每位學生，如果成績不低於 38 分，
 * 則會根據以下規則進行四捨五入：

- 如果成績與下一個 5 的倍數的差小於 3，則將成績四捨五入至下一個 5 的倍數。
- 如果成績與下一個 5 的倍數的差大於或等於 3，則成績不變。
 * 
 * 預計輸入 :const arr = [73, 67, 38, 33];
 * 
 * 預期結果 :[75,67,40,33]
 * 
 */

const arr = [73, 67, 38, 33];

function gradingStudents(grades) {
  return grades.map((num) => {
    if (num < 38) {
      return num;
    } else {
      const next5 = Math.ceil(num / 5) * 5;
      if (next5 - num < 3) {
        return next5;
      } else {
        return num;
      }
    }
  });
}
console.log(gradingStudents(arr));
