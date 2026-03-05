import Searchbar from "./Searchbar.tsx";
function AppContent() {
    return (
        <>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-4">
                    <h2 className="text-4xl text-white font-bold text-center">
                        Welcome to WeatherApp
                    </h2>
                </div>
                <Searchbar/>
            </div>
        </>
    );
}

export default AppContent;