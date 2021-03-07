import { SET_SELECTED_CITY } from '../constants/types'

export const setSelectedCity = (cityName) => {

  return {
    type: SET_SELECTED_CITY,
    payload: cityName
  }

}