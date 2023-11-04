import { GetCurrentWeatherDataFromDb, GetForecastDataFromDb} from "$lib/services/norns-api/norns-api";
import type { AvailableCities, AvailableServices } from '$lib/types/index';

/**
 * 
 * @param service Service to call
 * @param city 
 * @returns 
 */
export async function callApiServiceAndParceValue(service: AvailableServices, city: string): Promise<any> {
    const cityLowercase = city.toLowerCase() as AvailableCities;
    let rawData: any;

    try {
        switch (service) {
            case "getCurrentWeatherData":
                rawData = await GetCurrentWeatherDataFromDb([cityLowercase]);
                break;
            case "getForecastData":
                rawData = await GetForecastDataFromDb([cityLowercase]);
                break;
            default:
                throw new Error(`Service ${service} not recognized`);
        }
        const rawDataValue = await rawData[cityLowercase][0].weather_data.Value;
        const parsedWeatherDataValue = JSON.parse(rawDataValue);
        
        return parsedWeatherDataValue;
    } catch (error) {
        console.error(error);
    }
}