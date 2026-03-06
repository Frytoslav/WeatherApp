import Searchbar from "./Searchbar.tsx";
import Dashboard from "./Dashboard.tsx";
import type {FullWeatherData} from "../types/weather.ts";
import {useEffect, useState} from "react";

interface AppContentProps {
    onWeatherIdChange: (weatherId: number | null) => void;
}

function AppContent({onWeatherIdChange}: AppContentProps) {
    const [weather, setWeather] = useState<FullWeatherData | null>(null);
    const [contentState, setContentState] = useState<"idle" | "loading" | "error" | "dashboard">("idle");

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
            <Searchbar onWeatherUpdate={setWeather} setContentState={setContentState} />
            <div className="mt-8">
                {contentState === "idle" && (
                    <p className="text-white">Enter a city to start</p>
                )}

                {contentState === "loading" && (
                    <p className="text-white text-lg animate-pulse">Loading...</p>
                )}

                {contentState === "dashboard" && weather && (
                    <Dashboard weatherData={weather}/>
                )}

                {contentState === "error" && (
                    <p className="text-red-500 text-lg">
                        Error fetching weather data. Please try again.
                    </p>
                )}
            </div>
        </div>
    );
}
export default AppContent;