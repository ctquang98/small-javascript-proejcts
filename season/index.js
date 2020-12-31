import { seasons } from '../constants/index.js';

function getCurrentMonth() {
    return (new Date()).getMonth();
}
export default function getSeason() {
    const currentMonth = getCurrentMonth();
    switch(currentMonth) {
        case 0: case 1: case 2:
            return seasons[0];
        case 3: case 4: case 5:
            return seasons[1];
        case 6: case 7: case 8:
            return seasons[2];
        default:
            return seasons[3];
    }
}