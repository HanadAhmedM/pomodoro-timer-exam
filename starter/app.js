// Elements
const timerDisplay = document.getElementById("timer");
const sessionLabel = document.getElementById("session-label");
const controlButton = document.getElementById("control-btn");
const resetButton = document.getElementById("reset-btn");
const circle = document.querySelector(".progress-ring__circle");
const circleBg = document.querySelector(".progress-ring__bg");

// Circle
const FULL_DASH_ARRAY = 439.82;

// Times in seconds
const FOCUS_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 30;      // 30 seconds

let timeLeft = FOCUS_TIME;
let timerInterval = null;
let isRunning = false;
let onBreak = false;
let pausedFocusTime = 0;

// Format time mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Update circle visual
function updateCircle() {
  const total = onBreak ? BREAK_TIME : FOCUS_TIME;
  const percentage = timeLeft / total;
  const offset = FULL_DASH_ARRAY * (1 - percentage);
  circle.style.strokeDashoffset = offset;
  circle.style.transition = "stroke-dashoffset 0.1s linear";

  if (onBreak) {
    circle.style.stroke = "url(#breakGradient)";
    circleBg.style.stroke = "#bbf7d0";
  } else {
    circle.style.stroke = "url(#focusGradient)";
    circleBg.style.stroke = "#fcd5d5";
  }
}

// Update timer display
function updateDisplay() {
  timerDisplay.textContent = formatTime(Math.ceil(timeLeft));
  sessionLabel.textContent = onBreak ? "Paus" : "Fokus";
  updateCircle();
}

// Start timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  controlButton.textContent = "Pausa";

  let previousTimestamp = Date.now();

  timerInterval = setInterval(() => {
    const now = Date.now();
    const delta = (now - previousTimestamp) / 1000;
    previousTimestamp = now;

    timeLeft -= delta;
    if (timeLeft < 0) timeLeft = 0;

    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;

      if (onBreak) {
        // Break finished → back to paused focus
        onBreak = false;
        timeLeft = pausedFocusTime;
        pausedFocusTime = 0;
        controlButton.textContent = "Fortsätt"; // wait for user
      }
    }
  }, 100);
}

// Pause → start break automatically
function pauseTimer() {
  if (!isRunning) return;
  clearInterval(timerInterval);
  isRunning = false;

  if (!onBreak) {
    pausedFocusTime = timeLeft;
    onBreak = true;
    timeLeft = BREAK_TIME;
    startTimer();
    controlButton.textContent = "Fortsätt"; // to continue focus after break
  }
}

// Control button click
controlButton.addEventListener("click", () => {
  if (!isRunning && controlButton.textContent === "Starta") {
    startTimer();
  } else if (isRunning && controlButton.textContent === "Pausa") {
    pauseTimer();
  } else if (!isRunning && controlButton.textContent === "Fortsätt") {
    startTimer(); // continue original focus
  }
});

// Reset button
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  onBreak = false;
  timeLeft = FOCUS_TIME;
  pausedFocusTime = 0;
  updateDisplay();
  controlButton.textContent = "Starta";
});

// Initialize
updateDisplay();
