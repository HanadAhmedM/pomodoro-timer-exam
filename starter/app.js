// -------------------------
// VARIABLES
// -------------------------
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const breakTimerDisplay = document.getElementById('break-timer');

let timer = null;
let timeLeft = 25 * 60 * 1000; // 25 min
const initialTime = 25 * 60 * 1000;
let isRunning = false;

let breakInterval = null;
let breakTime = 30 * 1000; // 30 sec
let breakRemaining = breakTime;

// -------------------------
// UPDATE DISPLAY
// -------------------------
function updateDisplay() {
  const totalSeconds = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hundredths = Math.floor((timeLeft % 1000) / 10);

  timerDisplay.textContent =
    `${minutes.toString().padStart(2,'0')}:` +
    `${seconds.toString().padStart(2,'0')}.` +
    `${hundredths.toString().padStart(2,'0')}`;
}

// -------------------------
// POMODORO TIMER
// -------------------------
function startTimer() {
  if (isRunning) return;
  isRunning = true;

  startButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
  pauseButton.textContent = 'Pausa';
  resetButton.style.display = 'inline-block';

  let previous = Date.now();
  const interval = 10;

  timer = setInterval(() => {
    const now = Date.now();
    const delta = now - previous;
    previous = now;

    timeLeft -= delta;

    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(timer);
      isRunning = false;
      // Automatically start break when Pomodoro ends
      startBreak();
    }

    updateDisplay();
  }, interval);
}

function pauseTimer() {
  if (!isRunning) return;
  clearInterval(timer);
  isRunning = false;

  // Automatically start break on pause
  startBreak();
}

// -------------------------
// BREAK TIMER
// -------------------------
function startBreak() {
  breakTimerDisplay.style.display = 'block';
  breakRemaining = breakTime;

  let previous = Date.now();

  breakInterval = setInterval(() => {
    const now = Date.now();
    const delta = now - previous;
    previous = now;
    breakRemaining -= delta;

    if (breakRemaining <= 0) {
      clearInterval(breakInterval);
      breakInterval = null;
      breakRemaining = 0;
      breakTimerDisplay.textContent = 'PAUS KLAR!';
      breakTimerDisplay.style.color = 'green';
      startButton.style.display = 'inline-block';
      pauseButton.style.display = 'none';
      resetButton.style.display = 'none';
      timeLeft = initialTime;
      timerDisplay.textContent = '25:00';
    } else {
      const minutes = Math.floor(breakRemaining / 60000);
      const seconds = Math.floor((breakRemaining % 60000) / 1000);
      breakTimerDisplay.textContent =
        `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }
  }, 100);
}

// -------------------------
// RESET TIMER
// -------------------------
function resetTimer() {
  // Stop Pomodoro
  clearInterval(timer);
  isRunning = false;
  timeLeft = initialTime;
  updateDisplay();

  // Stop break if running
  if (breakInterval) {
    clearInterval(breakInterval);
    breakInterval = null;
  }
  breakTimerDisplay.style.display = 'none';

  // Reset buttons
  startButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
  resetButton.style.display = 'none';
  pauseButton.textContent = 'Pausa';
}

// -------------------------
// EVENT LISTENERS
// -------------------------
startButton.addEventListener('click', startTimer);

pauseButton.addEventListener('click', () => {
  if (isRunning) {
    // Pause Pomodoro and start break automatically
    pauseTimer();
    pauseButton.textContent = 'Fortsätt';
  } else {
    // Fortsätt clicked → hide break and resume Pomodoro
    if (breakInterval) {
      clearInterval(breakInterval);
      breakInterval = null;
    }
    breakTimerDisplay.style.display = 'none';
    startTimer();
  }
});

resetButton.addEventListener('click', resetTimer);

// -------------------------
// INIT
// -------------------------
updateDisplay();
