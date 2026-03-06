import Header from "./components/Header.tsx";
import Background from "./components/Background.tsx";
import AppContent from "./components/AppContent.tsx";
import {useState} from "react";

function App() {
    const [weatherId, setWeatherId] = useState<number | null>(null);
  return (
      <div className="flex flex-col min-h-screen">
        <Background weatherId = {weatherId} />
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <AppContent onWeatherIdChange= {setWeatherId} />
        </main>
      </div>
  )
}

export default App
