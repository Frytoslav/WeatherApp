interface WeatherHeader {
    city: string;
    country: string;
    date: string;
}

interface WeatherBody {
    id: number;
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
