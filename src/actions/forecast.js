import { GET_FORECAST, FORECAST_ERROR } from '../constants/types'
import axios from 'axios'

export const getForecast = (cityName) => async dispatch => {

  try {
    const res = await axios.get('http://127.0.0.1:8000/api/weather/' + cityName)
    const payload = {
      forecast: res.data
    }
    dispatch({
      type: GET_FORECAST,
      payload: payload
    })
  }
  catch (e) {
    dispatch({
      type: FORECAST_ERROR,
      payload: console.log(e),
    })
  }

}