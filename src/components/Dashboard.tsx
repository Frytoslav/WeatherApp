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
    {/*TO DO: Change the styling to look more like a weather dashboard with icons and better layout*/}
    return (
        <div
            className="w-full max-w-md mx-auto mt-10 bg-gray-950 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
                <h2 className="text-3xl text-white font-bold mr-4">{weatherData.header.city}, {weatherData.header.country}</h2>
                <span className="text-sm text-gray-300">{weatherData.header.date}</span>
            </div>
            <div className={`flex items-center mb-4 w-full`}>
                <div className="flex flex-col items-center w-full">
                    <p className="text-4xl mb-4">{weatherData.body.icon}</p>
                    <p className="text-sm text-gray-300 mb-2">{capitalizeFirstLetter(weatherData.body.description)}</p>
                    <p className="text-sm text-gray-300 mb-2">{weatherData.body.humidity}% Humidity</p>
                    <p className="text-2xl font-bold text-white">{weatherData.body.temperature}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;