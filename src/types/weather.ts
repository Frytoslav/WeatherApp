interface WeatherHeader {
    city: string;
    country: string;
    date: string;
}

interface WeatherBody {
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
}

export interface FullWeatherData {
    header: WeatherHeader;
    body: WeatherBody;
}
