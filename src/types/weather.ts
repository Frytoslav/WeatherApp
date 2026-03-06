{/* TO DO: Restructure the weather data into one single interface that can be easily consumed by the Dashboard component*/}
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
