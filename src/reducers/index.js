import { combineReducers } from 'redux'
import reducerWeather from './reducer_weather'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: reducerWeather
});

export default rootReducer;
