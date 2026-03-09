import Searchbar from "./Searchbar.tsx";
import Dashboard from "./Dashboard.tsx";
import type {FullWeatherData} from "../types/weather.ts";
import {useEffect, useState} from "react";
import {fetchWeather} from "../api/weatherService.ts";
import {useQuery} from "@tanstack/react-query";

interface AppContentProps {
    onWeatherIdChange: (weatherId: number | null) => void;
}

function AppContent({onWeatherIdChange}: AppContentProps) {
    const [searchedCity, setSearchedCity] = useState<string>("");
    const {
        data: weather,
        isPending,
        isError,
        error
    } = useQuery({
        queryKey: ['weather', searchedCity],
        queryFn: async () => fetchWeather(searchedCity),
        enabled: !!searchedCity,
        retry: false,
        select: (rawData): FullWeatherData => ({
            header: {
                city: rawData.name,
                country: rawData.sys.country,
                date: new Date().toLocaleDateString()
            },
            body: {
                temperature: rawData.main.temp,
                id: rawData.weather[0].id,
                description: rawData.weather[0].description,
                icon: rawData.weather[0].icon,
                humidity: rawData.main.humidity,
                windSpeed: rawData.wind.speed
            }
        })
    });
    useEffect(() => {
        if (weather?.body?.id) {
            onWeatherIdChange(weather.body.id);
        } else {
            onWeatherIdChange(null);
        }
    }, [weather, onWeatherIdChange]);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-4">
                <h2 className="text-4xl text-white font-bold text-center">
                    Welcome to WeatherApp
                </h2>
            </div>
            <Searchbar onSearch={setSearchedCity} />
            <div className="mt-8">
                {!searchedCity && (
                    <p className="text-white">Enter a city to start</p>
                )}
                {isPending && searchedCity && (
                    <p className="text-white text-lg animate-pulse">Loading...</p>
                )}
                {weather && !isError && (
                    <Dashboard weatherData={weather}/>
                )}
                {isError && (
                    <p className="text-red-500 text-lg">
                        {error instanceof Error ? error.message : "Error fetching weather data."} Please try again.
                    </p>
                )}
            </div>
        </div>
    );
}
export default AppContent;