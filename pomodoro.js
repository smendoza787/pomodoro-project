var time = 5;
var countdownFunction, update;

function updateMessage() {
  var message = document.getElementById('message');
  message.innerHTML = "Seconds left: " + time;
}

function countdown() {
  time--;

  if (time == -1) {
    stopCountdown();
  }
}

function stopCountdown() {
  clearInterval(update);
  clearInterval(countdownFunction);
}

function start() {
  countdownFunction = setInterval(countdown, 1000);
  update = setInterval(updateMessage, 500);
}

function stop() {
  stopCountdown();
}
