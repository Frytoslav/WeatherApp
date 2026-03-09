import {useState} from "react";
import * as React from "react";

interface SearchbarProps {
    onSearch: (city: string) => void;
}

function Searchbar({onSearch}: SearchbarProps) {
    const [search, setSearch] = useState("");

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && search.trim() !== '') {
            if (event.key === 'Enter' && search.trim() !== '') {
                onSearch(search.trim());
                setSearch("");
            }
        }
    };
    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <input
                type="text"
                placeholder="Search for a city..."
                className="w-full p-3 rounded-lg shadow-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export default Searchbar;