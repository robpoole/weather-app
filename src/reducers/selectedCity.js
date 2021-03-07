import { SET_SELECTED_CITY } from '../constants/types'

const initialState = {
  selectedCity: false
}

function selectedCity(state = initialState, action) {
  switch (action.type) {

    case SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload
      }
    default: return state
  }
}

export default selectedCity