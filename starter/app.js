let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start-btn');
let pauseButton = document.getElementById('pause-btn');

let timer; // interval variable
let timeLeft = 25 * 60 * 1000; // 25 minutes in ms
let isRunning = false;

// Update timer display in mm:ss.hh
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

// Start or resume timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;

  // Swap buttons
  startButton.style.display = "none";
  pauseButton.style.display = "inline-block";
  pauseButton.textContent = "Pausa";

  const interval = 10; // 10ms for hundredths
  let previous = Date.now();

  timer = setInterval(() => {
    const now = Date.now();
    const delta = now - previous;
    previous = now;

    timeLeft -= delta;
    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(timer);
      isRunning = false;
      alert("Pass klart!");
      // Reset buttons
      startButton.style.display = "inline-block";
      pauseButton.style.display = "none";
    }
    updateDisplay();
  }, interval);
}

// Pause timer
function pauseTimer() {
  if (!isRunning) return;
  clearInterval(timer);
  isRunning = false;
}

// Event listeners
startButton.addEventListener('click', startTimer);

pauseButton.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
    pauseButton.textContent = "Fortsätt";
  } else {
    startTimer();
  }
});

// Init display
updateDisplay();
