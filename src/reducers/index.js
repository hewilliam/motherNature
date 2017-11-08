import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducerWeather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
