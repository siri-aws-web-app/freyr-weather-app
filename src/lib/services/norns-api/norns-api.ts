import axios from 'axios';

axios.defaults.baseURL = 'https://qr3gs2phpt.eu-central-1.awsapprunner.com';

export function getCurrentPastWeatherData(cities: string[]) {
    return axios.get(`/current-weather-data?cities=${cities.join(',')}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
        console.log(error);
        })
}
