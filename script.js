
let startButton = document.getElementById('start-click');
let stopButton = document.getElementById('stop-click');
let resetButton = document.getElementById('reset-click');
let hourDisplay = document.getElementById('hour-nearam');
let minuteDisplay = document.getElementById('minute-nodi');

let timer;
let hour = 0;
let minute = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(function() {
            minute++;
            if (minute == 60) {
                minute = 0;
                hour++;
            }

            // Update the display
            hourDisplay.textContent = hour < 10 ? `0${hour}` : hour;
            minuteDisplay.textContent = minute < 10 ? `0${minute}` : minute;
        }, 60000); // Update every minute
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    hour = 0;
    minute = 0;
    hourDisplay.textContent = '00';
    minuteDisplay.textContent = '00';
}

// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
