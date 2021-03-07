import { combineReducers } from 'redux'
import cities from './cities'
import selectedCity from './selectedCity'
import forecast from './forecast'

export default combineReducers({
  cities,
  selectedCity,
  forecast
})