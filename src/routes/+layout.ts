import { getAndSaveCurrentWeatherData } from '$lib/utils/current-weather-store';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// Fetch current weather data on page load and save to store
getAndSaveCurrentWeatherData();