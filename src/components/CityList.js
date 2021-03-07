import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCities } from '../actions/cities'
import { setSelectedCity } from '../actions/selectedCity'
import { getForecast } from '../actions/forecast'
import { Transition } from '@headlessui/react'

const CityList = () => {

  // Handle the visibility of our city dropdown
  const [isOpen, setIsOpen] = useState(false)

  // Grab useDispatch so we can update stuff
  const dispatch = useDispatch();

  // Grab our city list from the store
  let { cities } = useSelector(
    state => state.cities
  );

  // Grab our selected city from the store
  let { selectedCity } = useSelector(
    state => state.selectedCity
  );

  // Run our initial fetch of the city list from the API
  useEffect(() => {
    dispatch(getCities());
  }, [])

  // Handle our selecting of a new city
  function selectCity(cityName) {
    dispatch(setSelectedCity(cityName));
    dispatch(getForecast(cityName));
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-gray-800 absolute top-0 left-0 w-full">
      <div className="relative inline-block text-left m-4">
        <div>
          <button type="button" onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
            {selectedCity ? selectedCity : "Please Select"}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {cities ? cities.map((cityName, index) => (
              <div href="#" role="menuitem" key={cityName}
                onClick={() => selectCity(cityName)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">{cityName}</div>
            )) : ""}
          </div>
        </Transition>
      </div>

    </div >
  )
}

export default CityList