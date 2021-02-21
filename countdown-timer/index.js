const daysElm = document.getElementById('days');
const hoursElm = document.getElementById('hours');
const minsElm = document.getElementById('mins');
const secsElm = document.getElementById('secs');

let newYear = '1 Jan 2022';

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

export default function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / (60*60*24));

    const hours = Math.floor(totalSeconds / (60*60)) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysElm.innerHTML = days;
    hoursElm.innerHTML = formatTime(hours);
    minsElm.innerHTML = formatTime(mins);
    secsElm.innerHTML = formatTime(secs);
}