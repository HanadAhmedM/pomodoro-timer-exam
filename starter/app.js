// --- Elements ---
const timerDisplay = document.getElementById("timer");
const sessionLabel = document.getElementById("session-label");
const controlButton = document.getElementById("control-btn");
const resetButton = document.getElementById("reset-btn");
const circle = document.querySelector(".progress-ring__circle");
const circleBg = document.querySelector(".progress-ring__bg");

// --- Circle Setup ---
const FULL_DASH_ARRAY = 439.82;

// --- Time Settings (in seconds) ---
const FOCUS_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 30;      // 30 seconds

// --- State Variables ---
let timeLeft = FOCUS_TIME;
let timerInterval = null;
let isRunning = false;
let onBreak = false;
let pausedFocusTime = 0;
let alarmSound = null; // 🔔 håller referens till ljudet

// --- Format time as mm:ss ---
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// --- Update Circle Visual ---
function updateCircle() {
  const total = onBreak ? BREAK_TIME : FOCUS_TIME;
  const percentage = timeLeft / total;
  const offset = FULL_DASH_ARRAY * (1 - percentage);
  circle.style.strokeDashoffset = offset;
  circle.style.transition = "stroke-dashoffset 0.1s linear";

  if (onBreak) {
    circle.style.stroke = "url(#breakGradient)";
    circleBg.style.stroke = "#bbf7d0"; // ljusgrön bakgrund
  } else {
    circle.style.stroke = "url(#focusGradient)";
    circleBg.style.stroke = "#fcd5d5"; // ljusröd bakgrund
  }
}

// --- Update Timer Display ---
function updateDisplay() {
  timerDisplay.textContent = formatTime(Math.ceil(timeLeft));
  sessionLabel.textContent = onBreak ? "Paus" : "Fokus";
  updateCircle();
}

// --- Start Timer ---
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
        // 🔔 När pausen är slut → gå tillbaka till fokusläge, vänta på fortsättning
        onBreak = false;
        timeLeft = pausedFocusTime;
        pausedFocusTime = 0;
        controlButton.textContent = "Fortsätt";
        playAlarm(); // spela alarmet när pausen tar slut
      }
    }
  }, 100);
}

// --- Pause Timer (startar break automatiskt) ---
function pauseTimer() {
  if (!isRunning) return;
  clearInterval(timerInterval);
  isRunning = false;

  if (!onBreak) {
    pausedFocusTime = timeLeft;
    onBreak = true;
    timeLeft = BREAK_TIME;
    startTimer();
    controlButton.textContent = "Fortsätt"; // kommer användas efter break
  }
}

// --- Alarm Functions ---
function playAlarm() {
  alarmSound = new Audio("assets/sounds/816657__jw_audio__scialrm_alarm-repeat-high-pitched-danger-warning-_01_jw-audio_a1.wav");
  alarmSound.loop = true;
  alarmSound.play().catch(() => {
    alert("🔔 Pausen är slut! (Ljudet kunde inte spelas)");
  });
}

function stopAlarm() {
  if (alarmSound) {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmSound = null;
  }
}

// --- Control Button ---
controlButton.addEventListener("click", () => {
  if (!isRunning && controlButton.textContent === "Starta") {
    startTimer();
  } else if (isRunning && controlButton.textContent === "Pausa") {
    pauseTimer();
  } else if (!isRunning && controlButton.textContent === "Fortsätt") {
    stopAlarm(); // 🛑 stoppa alarmet
    startTimer(); // fortsätt fokus
  }
});

// --- Reset Button ---
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  stopAlarm(); // 🛑 stoppa ljudet om det spelar
  isRunning = false;
  onBreak = false;
  timeLeft = FOCUS_TIME;
  pausedFocusTime = 0;
  updateDisplay();
  controlButton.textContent = "Starta";
});

// --- Initialize ---
updateDisplay();
