// Play sound function
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

// get the time
function getTime(){
  return new Date().getTime();
}

var alarmTime;
var timeText;
var timerDoneText;
var timerIntervalInMS = 30 * 60 * 1000;
var headerRevert = 30 * 1000
var alarmSound;

window.onload = function(){
  alarmTime = getTime() + timerIntervalInMS;
  timeText = document.getElementById("timer");
  timerDoneText = document.getElementById("done");
  alarmSound = new sound("alarm.mp3");
  setInterval(changeTime, 80);
}

function changeTime(){
  difference = Math.floor((alarmTime - getTime()) / 1000);
  if(difference <= 0){
    timerDone();
  }
  minutes = "" + Math.floor(difference / 60);
  seconds = (difference - minutes * 60);
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  timeText.innerHTML = minutes + ":" + seconds;
}

function revertHeader(){
  timerDoneText.innerHTML = "";
}

function timerDone(){
  alarmSound.play();
  alarmTime = getTime() + timerIntervalInMS;
  var notification = new Notification("Timer Done!");
  timerDoneText.innerHTML = "Your Timer is Done!";
  setTimeout(revertHeader, headerRevert);

  var path = window.location.pathname;
  console.log(path)
  window.open(path, '').close();
  window.open(path, '').focus();
  window.close();
}
