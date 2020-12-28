export const WEATHER_API = 'https://api.openweathermap.org';
export const WEATHER_API_KEY = 'ac486a59ef8c742d9a1c8ac9bb453413';

export const SPRING = 'SPRING';
export const SUMMER = 'SUMMER';
export const AUTUMN = 'AUTUMN';
export const WINTER = 'WINTER';
export const seasons = [
    {
        id: 0,
        name: SPRING,
        icon: '🌸',
        color: 'none',
        thumb: 'spring.jpg'
    },
    {
        id: 1,
        name: SUMMER,
        icon: '☀',
        color: '#ffee59',
        thumb: 'summer.jpg'
    },
    {
        id: 2,
        name: AUTUMN,
        icon: '&#127809',
        color: 'none',
        thumb: 'autumn.jpg'
    },
    {
        id: 3,
        name: WINTER,
        icon:  '❄',
        color: '#ffffff',
        thumb: 'winter.jpg'
    }
];