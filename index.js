import countDown from './countdown-timer/index.js';
import createRain from './rain-animation/index.js';
import getWeatherByLocation from './weather-forecast/index.js';
import getSeason from './season/index.js';
import changeBackground from './change-background/index.js';

// Setting background image base on current season
let season = getSeason();
document.getElementsByClassName('background-container')[0].style.backgroundImage = `url('./images/${season.thumb}')`;

// change background event
function changeBackgroundEvent(e) {
    season = changeBackground(season);
}
document.getElementById('changeBackgroundBtn').addEventListener('click', changeBackgroundEvent);

// Countdown Timer to New Year Eve
countDown();
setInterval(countDown, 1000);

// Rain icon base on current season
setInterval(() => {
    createRain(season);
}, 300);

// Weather Forecast
const defaultLocation = 'Ho Chi Minh';
function getLocation(e) {
    const location = e.target.value ? e.target.value : defaultLocation;
    if(e.key === 'Enter') {
        getWeatherByLocation(location);
    }
}

getWeatherByLocation(defaultLocation);
document.getElementById('locationSearch').addEventListener('keydown', getLocation);