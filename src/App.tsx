import Header from "./components/Header.tsx";
import Background from "./components/Background.tsx";
import AppContent from "./components/AppContent.tsx";
import {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";

function App() {
    const [weatherId, setWeatherId] = useState<number | null>(null);
  return (
      <HelmetProvider>
          <div className="flex flex-col min-h-screen">
              <Helmet>
                  <title>WeatherApp</title>
                  <meta name="description" content="Szybka i prosta aplikacja do sprawdzania pogody na całym świecie. Wpisz miasto i poznaj aktualne warunki atmosferyczne." />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <meta property="og:title" content="WeatherApp" />
                  <meta property="og:description" content="Sprawdź aktualną pogodę w dowolnym mieście na świecie." />
                  <meta property="og:type" content="website" />
              </Helmet>
              <Background weatherId={weatherId} />
              <Header />
              <main className="flex-1 flex items-center justify-center p-4">
                  <AppContent onWeatherIdChange={setWeatherId} />
              </main>
          </div>
      </HelmetProvider>
  )
}

export default App
