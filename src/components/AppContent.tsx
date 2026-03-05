import Searchbar from "./Searchbar.tsx";
import Dashboard from "./Dashboard.tsx";
import type {FullWeatherData} from "../types/weather.ts";
import {useState} from "react";
function AppContent() {
    const [weather, setWeather] = useState<FullWeatherData | null>(null);
    return (
        <>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-4">
                    <h2 className="text-4xl text-white font-bold text-center">
                        Welcome to WeatherApp
                    </h2>
                </div>
                <Searchbar onWeatherUpdate={setWeather}/>
                <Dashboard weatherData={weather}/>
            </div>
        </>
    );
}

export default AppContent;