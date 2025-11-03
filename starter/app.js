// Pomodoro Timer - US1a: Starta timern (med hundradelar)

let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start-btn');

let timer; // intervallet
let timeLeft = 25 * 60 * 1000; // 25 minuter i millisekunder
let isRunning = false;

function updateDisplay() {
  const totalSeconds = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hundredths = Math.floor((timeLeft % 1000) / 10);

  timerDisplay.textContent =
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}.` +
    `${hundredths.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  const interval = 10; // uppdatera var 10:e ms = hundradelar
  const startTime = Date.now();

  timer = setInterval(() => {
    const elapsed = Date.now() - startTime;
    timeLeft -= interval;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      timeLeft = 0;
      updateDisplay();
      alert("Pass klart!");
    }
  }, interval);
}

startButton.addEventListener('click', startTimer);

// Initiera displayen
updateDisplay();
