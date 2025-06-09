const startButton = document.getElementById("study-btn");
const timerDisplay = document.getElementById("time-left");

let totalTime = 25 * 60;
let timerId = null;
let isRunning = false;

function updateTimerDisplay() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = "Pause";

        timerId = setInterval(() => {
            if (totalTime > 0) {
                totalTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerId);
                isRunning = false;
                startButton.textContent = "Start";
            }
        }, 1000);

    } else {
        isRunning = false;
        clearInterval(timerId);
        startButton.textContent = "Resume";
    }
}

startButton.addEventListener("click", startTimer);
updateTimerDisplay();
