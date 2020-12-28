import { seasons } from '../constants/index.js';

function nextSeason(currentSeason) {
    if(currentSeason.id === seasons.length-1) return seasons[0];
    const index = currentSeason.id + 1;
    return seasons[index];
}

export default function changeBackground(season) {
    const nextSeasonObj = nextSeason(season);
    document.getElementsByClassName('background-container')[0].style.backgroundImage = `url('./images/${nextSeasonObj.thumb}')`;
    return nextSeasonObj;
}