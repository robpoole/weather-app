import React from 'react'
import { useSelector } from 'react-redux'

const WeatherForecast = () => {

  // Grab our selected city from the store
  let { selectedCity } = useSelector(
    state => state.selectedCity
  );

  // Grab our forecast from the store
  const { forecast } = useSelector(
    state => state.forecast
  );

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col flex-grow-0 w-full items-center justify-center text-4xl py-4 font-bold text-white">
        {selectedCity ? selectedCity : "Select a City"}
      </div>
      <div className="flex flex-row flex-grow-0 flex-wrap w-full items-center justify-around">
        {forecast ? forecast.map((forecast, index) => (
          <div className="flex-1 bg-gradient-to-br from-white to-gray-50 text-center m-2 rounded-xl shadow-md px-2 py-4" key={forecast.day}>
            <div>{forecast.day}</div>
            <div className="text-4xl my-4">{forecast.temp}&deg;</div>
            <div>{forecast.desc}</div>
          </div>
        )) : ""}
      </div >
    </div>
  )
}

export default WeatherForecast