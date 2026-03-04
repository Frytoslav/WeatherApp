import cloud_icon from '../assets/cloud_header_icon.jpg';
function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between h-20 top-0">
      <h1 className="text-2xl font-bold">WeatherApp</h1>
        <img src={cloud_icon} alt="Cloud Icon" className="w-10 h-10" />
    </header>
  );
}

export default Header;