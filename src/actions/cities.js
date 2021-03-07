import { GET_CITIES, CITIES_ERROR } from '../constants/types'
import axios from 'axios'

export const getCities = () => async dispatch => {

  // Fetch the data from our API
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/cities')
    console.log('action response / ', res)
    dispatch({
      type: GET_CITIES,
      payload: res.data
    })
  }
  catch (e) {
    // Handle our errors
    dispatch({
      type: CITIES_ERROR,
      payload: console.log(e),
    })
  }

}