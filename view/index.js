const label = document.querySelector('#timer');
const startButton = document.querySelector('#startbutton');

var timerStarter = false;
var interval;

startButton.addEventListener('click', function (event) {
    var duration = 60 * 1;

    timerStarter = !timerStarter;

    startButton.innerHTML = timerStarter ? 'Stop' : 'Start';

    if (timerStarter)
        startTimer(duration, label);
    else {
        changeLabel('30:00');
        if (interval) clearInterval(interval);
    }

});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minuest = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        changeLabel(minutes + ":" + seconds);

        if (--timer < 0) {
            if (interval) clearInterval(interval);
        }

    }, 1000);
}


function changeLabel(text) {
    label.textContent = text;
}

// document.addEventListener('DOMContentLoaded', function (event) {
//     var fiveMInutes = 60 * 5;
//     startTimer(fiveMInutes, label);
// });