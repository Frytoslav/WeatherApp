import Header from "./components/Header.tsx";
import Background from "./components/Background.tsx";
import AppContent from "./components/AppContent.tsx";

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Background />
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <AppContent />
        </main>
      </div>
  )
}

export default App
