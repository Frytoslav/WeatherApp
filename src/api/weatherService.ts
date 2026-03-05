const API_KEY : string = import.meta.env.VITE_API_KEY;
const BASE_URL : string = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async (city: string) => {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('City not found');
    }
    return await response.json();
}