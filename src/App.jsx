import { CurrencyConverter } from "./pages";

function App() {
  const BackgroundImage =
    "https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg";

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center px-4 py-8">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white text-center md:text-left px-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow mb-4">
              Currency Converter
            </h2>
            <p className="text-lg md:text-xl font-medium mb-4">
              Enhance your global shopping experience with real-time currency exchange.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
}

export default App;
