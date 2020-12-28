const rainContainer = document.getElementById('rainContainer');

export default function createRain(season) {
    const rain = document.createElement('div');

    rain.classList.add('rain-elm');
    rain.innerHTML = season.icon;
    rain.style.color = season.color;
    rain.style.left = Math.random() * 100 + 'vw';
    rain.style.animationDuration = Math.random() * 2 + 3 + 's';

    rainContainer.appendChild(rain);

    setInterval(() => {
        rain.remove();
    }, 5000);
}