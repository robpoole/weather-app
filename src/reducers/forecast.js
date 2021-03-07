import { GET_FORECAST } from '../constants/types'

const initialState = {
  selectedCity: false,
  forecast: [],
  loading: true
}

function forecast(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        selectedCity: action.payload.cityName,
        forecast: action.payload.forecast,
        loading: false

      }
    default: return state
  }
}

export default forecast