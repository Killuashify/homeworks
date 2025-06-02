let startTime = 5;

const timerElement = document.getElementById("timer");

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function startCountdown(duration) {
  let timeLeft = duration;

  timerElement.textContent = formatTime(timeLeft);

  const interval = setInterval(() => {
    timeLeft--;

    timerElement.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}

startCountdown(startTime);
