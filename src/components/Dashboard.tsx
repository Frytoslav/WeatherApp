import type {FullWeatherData} from "../types/weather.ts";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter.ts";

function Dashboard({weatherData}: { weatherData: FullWeatherData | null }) {
    if (!weatherData) {
        return (
            <div
                className="w-full max-w-md mx-auto mt-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-6">
                <p className="text-center text-gray-300">No weather data available. Please search for a city.</p>
            </div>
        );
    }
    return (
        <div
            className="w-full max-w-md mx-auto mt-10 bg-gray-950 bg-opacity-19 backdrop-blur-lg rounded-lg p-6
                       shadow-md transition-all duration-300 ease-in-out
                       hover:shadow-2xl hover:shadow-blue-500/20 cursor-default">

            <div className="flex items-center mb-4">
                <h2 className="text-3xl text-white font-bold mr-4">{weatherData.header.city}, {weatherData.header.country}</h2>
                <span className="text-sm text-gray-300">{weatherData.header.date}</span>
            </div>

            <div className={`flex items-center mb-4 w-full`}>
                <div className="flex flex-col items-center w-full">
                    <img src={`https://openweathermap.org/payload/api/media/file/${weatherData.body.icon}.png`}
                         alt="Weather Icon" className="w-20 h-20 mb-2"/>
                    <p className="text-sm text-gray-300 mb-2">{capitalizeFirstLetter(weatherData.body.description)}</p>
                    <p className="text-sm text-gray-300 mb-2">{weatherData.body.humidity}% Humidity</p>
                    <p className="text-2xl font-bold text-white">{weatherData.body.temperature}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;