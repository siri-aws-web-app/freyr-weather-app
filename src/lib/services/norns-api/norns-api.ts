import axios from 'axios';

axios.defaults.baseURL = 'https://api.siri-freyr.xyz';

export function getCurrentPastWeatherData(cities: string[]) {
    return axios.get(`/current-weather-data?cities=${cities.join(',')}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
        console.log(error);
        })
}
