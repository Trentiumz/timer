function getTime(){
  return new Date().getTime();
}


console.log("testtt");

var currentTime;
var alarmTime;
var timeText;
window.onload = function(){
  currentTime = getTime();
  alarmTime = currentTime + 30 * 60 * 1000;
  console.log(currentTime);
  timeText = document.getElementById("timer");
  setInterval(changeTime, 80);
}

function changeTime(){
  difference = Math.floor((alarmTime - getTime()) / 1000);
  minutes = "" + Math.floor(difference / 60);
  seconds = "" + (difference - minutes * 60);
  timeText.innerHTML = minutes + ":" + seconds;
}
