var minutes, seconds;
var isRunning = false;
var audio = new Audio('./ding.mp3');

// This starts after start button is hit and basically upates forever
function displayTime() {
  var time = document.getElementById('time');
  if (seconds < 10) {
    time.innerHTML = minutes + ":0" + seconds;
  } else {
    time.innerHTML = minutes + ":" + seconds;
  }

  // When the minutes and seconds hit 0 stop the clock
  if (seconds == 0 && minutes == 0) {
    stop();
    isRunning = false;
  }
}

// counts down seconds
function countdownSeconds() {
  seconds--;

  // when seconds get to "-1" AND the minutes left are still more than 0,
  // revert to 59 seconds and subtract from the minutes left
  if (seconds < 0 && minutes > 0) {
    seconds = 59;
    minutes--;
  }

  //
  if (minutes == 0 && seconds == 0) {
    audio.play();
  }
}

function start() {
  if (!minutes && !seconds) {
    minutes = 0;
    seconds = 5;
  }

  if (isRunning === false && minutes >= 0) {
    // weird how I don't put the var keyword and it still works?
    countdownSec = setInterval(countdownSeconds, 1000)
    update = setInterval(displayTime, 100);
  }

  isRunning = true;
}

function reset() {
  stop();
  minutes = 0;
  seconds = 10;
}


function stop() {
  clearInterval(countdownSec);
  isRunning = false;
}
