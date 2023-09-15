"use strict";
function formatTime(time) {
  let allseconds = time / 1e3;
  let minute = Math.floor(allseconds / 60);
  let _minute = minute < 10 ? "0" + minute : minute;
  let seconds = Math.floor(allseconds - minute * 60);
  let _seconds = seconds < 10 ? "0" + seconds : seconds;
  return _minute + ":" + _seconds;
}
exports.formatTime = formatTime;
