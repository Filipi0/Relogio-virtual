let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes')
let secondsElement = document.getElementById('seconds')

function newTime() {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const Seconds = date.getSeconds()

    hoursElement.textContent = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(Seconds);
}

function fixTime(time) {
    return time < 10 ? '0' + time : time;
}

newTime();
setInterval(newTime, 1000);