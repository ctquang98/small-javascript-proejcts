import { WEATHER_API as BASE_API, WEATHER_API_KEY as API_key } from '../constants/index.js';

const p = document.getElementById('weatherDetails');
const img = document.getElementById('weatherIcon');

const getWeatherByLocation = async location => {
    const url = BASE_API + `/data/2.5/weather?q=${location}&appid=${API_key}`;
    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        //console.log(data);
        if(data && Array.isArray(data.weather) && data.weather.length) {
            const { temp } = data.main;
            const sky = data.weather[0].main;
            p.innerHTML = data.name + ', ' +convertKtoC(temp) + '℃ - ' + sky;
            img.src = BASE_API + `/img/w/${data.weather[0].icon}.png`;
        }
    }
    catch (error) {
        console.error(error);
    }
}

const convertKtoC = K => (K - 273.15).toFixed(2);

export default getWeatherByLocation;