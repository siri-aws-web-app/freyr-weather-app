import { getCurrentPastWeatherData } from "$lib/services/norns-api/norns-api";
import { writable, type Writable } from "svelte/store";

export const currentWeatherStore = writable({});

const availableCities = ["Karlsruhe", "Stuttgart", "Berlin", "Cologne", "Frankfurt", "Hamburg", "Munich", "Leipzig", "Dortmund", "Dusseldorf"];

export function getAndSaveCurrentWeatherData() {
    getCurrentPastWeatherData(availableCities)
        .then((weatherData) => {
            currentWeatherStore.set(weatherData);
        })
        .catch((error) => {
            console.error(error);
        });
}