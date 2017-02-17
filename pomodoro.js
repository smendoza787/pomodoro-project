var minutes, seconds, countdownFunction, update;
var audio = new Audio('./ding.mp3');

// Is the clock running?
var isRunning = false;

// This starts after start button is hit and basically upates forever
function updateMessage() {
  var message = document.getElementById('message');
  if (seconds < 10) {
    message.innerHTML = minutes + ":0" + seconds;
  } else {
    message.innerHTML = minutes + ":" + seconds;
  }

  // When the minutes and seconds hit 0 stop the clock
  if (seconds == 0 && minutes == 0) {
    stop();
    isRunning = false;
  }
}


function countdownMinutes() {
  minutes--;
}

function countdownSeconds() {
  seconds--;

  if (seconds < 0 && minutes > 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes == 0 && seconds == 0) {
    audio.play();
  }
}

function start() {
  if (!minutes && !seconds) {
    minutes = 0;
    seconds = 10;
  }

  if (isRunning === false && minutes >= 0) {
    countdownSec = setInterval(countdownSeconds, 1000)
    update = setInterval(updateMessage, 100);
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
