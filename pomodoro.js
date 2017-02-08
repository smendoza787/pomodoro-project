var time = 5;
var countdownFunction, update;
var audio = new Audio('./ding.mp3');

function updateMessage() {
  var message = document.getElementById('message');
  message.innerHTML = "Seconds left: " + time;
}

function countdown() {
  time--;

  if (time == 0) {
    audio.play();
  }

  if (time == -1) {
    stopCountdown();
  }
}

function stopCountdown() {
  clearInterval(update);
  clearInterval(countdownFunction);
}

function start() {
  if (time !== 0) {
    countdownFunction = setInterval(countdown, 1000);
    update = setInterval(updateMessage, 500);
  }
}

function stop() {
  stopCountdown();
}
