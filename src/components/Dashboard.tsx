import type {FullWeatherData} from "../types/weather.ts";


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
        <div className="w-full max-w-md mx-auto mt-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
                <h2 className="text-3xl text-white font-bold mr-4">{weatherData.header.city}, {weatherData.header.country}</h2>
                <span className="text-sm text-gray-300">{weatherData.header.date}</span>
            </div>
            <div className={`flex items-center mb-4`}>
                <p className="font-bold">{weatherData.body.temperature}</p>
            </div>
        </div>
    );
}

export default Dashboard;