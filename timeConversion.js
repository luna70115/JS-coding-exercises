/**
 *
 * https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
 * 給定一個上午/下午-小時格式的時間，將其轉換為軍用（24 小時）時間。
 *
 * 預計輸入
 * timeConversion("07:05:45PM")
 * timeConversion("12:05:45AM")
 *
 * 預期結果
 * "19:05:45"
 * "00:05:45"
 */

function timeConversion(s) {
  let hours = parseInt(s.slice(0, 2));
  let minutesAndSeconds = s.slice(2, 8);
  const unit = s.slice(-2);

  if (unit === "AM") {
    if (hours === 12) {
      hours = "00";
    } else {
      hours = hours.toString().padStart(2, "0");
    }
  } else if (unit === "PM") {
    if (hours !== 12) {
      hours = (hours + 12).toString();
    }
  }

  return hours + minutesAndSeconds;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45AM"));
