import { GET_CITIES } from '../constants/types'

const initialState = {
  cities: [],
  loading: true
}

function cities(state = initialState, action) {
  switch (action.type) {

    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading: false
      }
    default: return state
  }
}

export default cities