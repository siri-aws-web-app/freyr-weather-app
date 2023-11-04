import axios from 'axios';
import type { AvailableCities } from '$lib/types/index';

axios.defaults.baseURL = import.meta.env.VITE_NORNS_API_URL;

export function GetCurrentWeatherDataFromDb(cities: AvailableCities[]): Promise<any> {
    return axios.get(`/current-weather-data?cities=${cities.join(',')}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
        console.log(error);
        })
}

/**
 * 
 * @param cities Available cities: karlsruhe, stuttgart, berlin, cologne, frankfurt, hamburg, munich, leipzig, dortmund, dusseldorf
 * @returns
 */
export function GetForecastDataFromDb(cities: AvailableCities[]): Promise<any> {
    return axios.get(`/forecast-data?cities=${cities.join(',')}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
        console.log(error);
        })
}