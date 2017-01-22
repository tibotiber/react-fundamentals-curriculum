/* @flow */
import axios from 'axios';

const apiKey = '&APPID=c04bcd76de50d1429a1e2012e4b5a933'

function getFiveDaysForecast (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + apiKey + '&type=accurate&cnt=5')
}

function getCurrentWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate' + apiKey)
}

function KelvinToCelsius(t) {
  return Math.round(t - 273.15);
}

const helpers = {
  getForecast (city) {
    return getFiveDaysForecast(city)
      .then((weather) => {
        return {
          city: weather.data.city,
          forecast: weather.data.list.map((day) => {
            console.log(day);
            return {
              timestamp: day.dt * 1000,
              description: day.weather[0].description,
              icon: day.weather[0].icon,
              humidity: day.humidity,
              minTemperature: KelvinToCelsius(day.temp.min),
              maxTemperature: KelvinToCelsius(day.temp.max)
            }
          })
        }
      })
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
