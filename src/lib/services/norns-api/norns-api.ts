import axios from 'axios';

console.log(import.meta.env.VITE_NORNS_API_URL);
axios.defaults.baseURL = import.meta.env.VITE_NORNS_API_URL;

export function getCurrentPastWeatherData(cities: string[]) {
    return axios.get(`/current-weather-data?cities=${cities.join(',')}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
        console.log(error);
        })
}
