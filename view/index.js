const label = document.querySelector('#timer');
const startButton = document.querySelector('#startbutton');

const duration = 60 * 30;

var timerStarter = false;
var interval;

startButton.addEventListener('click', function (event) {
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

            startButton.innerHTML = 'Start';
            changeLabel('__:__');
            notify('Término do tempo', 'O tempo de 30 minutos acabou');
            new Audio('../assets/beep-07.wav').play();
        }

    }, 1000);
}

function changeLabel(text) {
    label.textContent = text;

}

function notify(text, body) {
    new Notification(text, {
        body
    });
}

// document.addEventListener('DOMContentLoaded', function (event) {

// });