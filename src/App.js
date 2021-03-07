import CityList from './components/CityList'
import WeatherForecast from './components/WeatherForecast'

function App() {
  return (
    <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 w-screen h-screen">
      <CityList />
      <WeatherForecast />
    </div>
  );
}

export default App;
