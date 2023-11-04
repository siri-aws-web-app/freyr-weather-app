export interface CurrentWeather {
    temperatureC: number;
    description: string;
}

export interface Forecast {
    date: string;
    temperatureC: number;
    description: string;
}

export interface AirQuality {
    co: number;
    pm2_5: number;
    pm10: number;
    us_epa_index: string;
}

export interface Wind {
    wind_kph: number;
    wind_dir: string;
    wind_degree: number;
    gust_kph: number;
}