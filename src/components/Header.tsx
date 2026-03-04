import cloud_icon from '../assets/cloud_header_icon.jpg';
function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 items-center flex justify-between h-20 fixed top-0 left-0 w-full">
      <h1 className="text-2xl font-bold">WeatherApp</h1>
        <img src={cloud_icon} alt="Cloud Icon" className="w-10 h-10" />
    </header>
  );
}

export default Header;