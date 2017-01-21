/* @flow */
import axios from 'axios';

const apiKey = '&APPID=c04bcd76de50d1429a1e2012e4b5a933'

function getFiveDaysForecast (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + apiKey + '&type=accurate&cnt=5')
}

function getCurrentWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate' + apiKey)
}

const helpers = {
  getForecast (city) {
    return getFiveDaysForecast(city)
      .catch((err) => {
        console.warn('Error getting weather data', err);
      })
  },
  getWeather (city) {
    return getCurrentWeather(city)
      .catch((err) => {
        console.warn('Error getting the weather data', err)
      })
  }
}

export default helpers
