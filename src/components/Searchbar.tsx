import {fetchWeather} from "../api/weatherService.ts";
import {useState} from "react";
import type {FullWeatherData} from "../types/weather.ts";
import * as React from "react";

interface SearchbarProps {
    onWeatherUpdate: (data: FullWeatherData | null) => void;
    setContentState: (state: "idle" | "loading" | "error" | "dashboard") => void;
}

function Searchbar({onWeatherUpdate, setContentState}: SearchbarProps) {
    const [search, setSearch] = useState("");

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && search.trim() !== '') {
            setContentState("loading");
            try {
                const rawData = await fetchWeather(search);
                const formattedData: FullWeatherData = {
                    header: {
                        city: rawData.name,
                        country: rawData.sys.country,
                        date: new Date().toLocaleDateString()
                    },
                    body: {
                        temperature: rawData.main.temp,
                        description: rawData.weather[0].description,
                        icon: rawData.weather[0].icon,
                        humidity: rawData.main.humidity,
                        windSpeed: rawData.wind.speed
                    }
                };

                onWeatherUpdate(formattedData);
                setContentState("dashboard");
                setSearch("");
            } catch (error) {
                console.error(error);
                onWeatherUpdate(null);
                setContentState("error");
            }
        }
    };
    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <input
                type="text"
                placeholder="Search for a city..."
                className="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export default Searchbar;