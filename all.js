let timerInterval;
let totalTime = 0;
let isPaused = false;

document.getElementById('startButton').addEventListener('click', function() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    totalTime = hours * 3600 + minutes * 60;
    clearInterval(timerInterval)
    startTimer();
});

document.getElementById('pauseButton').addEventListener('click', function() {
    if (isPaused) {
        startTimer();
        this.innerText = "Pause timer"
    } else {
        clearInterval(timerInterval);
        this.innerText = "Resume timer"
    }
    isPaused = !isPaused
});

function startTimer() {
    timerInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').innerText = "Time is over!";
            return;
        }
        const hours = Math.floor(totalTime / 3600);
        const mins = Math.floor(totalTime % 3600 / 60);
        const secs = totalTime % 60;
        document.getElementById('timer').innerText = `${hours} : \
        ${mins < 10 ? '0' : ''}${mins} : ${secs < 10 ? '0' : ''}${secs}`;
        totalTime--;
    }, 1000);
}