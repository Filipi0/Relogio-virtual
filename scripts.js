let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes')
let secondsElement = document.getElementById('seconds')

function newTime() {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

function fixTime(time) {
    return time < 10 ? '0' + time : time;
}

newTime();
setInterval(newTime, 1000);