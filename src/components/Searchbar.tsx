import {fetchWeather} from "../api/weatherService.ts";
import {useState} from "react";

function Searchbar(){
    const [search, setSearch] = useState("");

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && search.trim() !== '') {
            try {
                const data = await fetchWeather(search);
                console.log('Weather data:', data);
            } catch (error) {
                console.error('Błąd:', error);
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