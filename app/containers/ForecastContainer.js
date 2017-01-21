import React, { PropTypes } from 'react'
import Forecast from '../components/Forecast'
import WeatherHelper from '../utils/WeatherHelper'

const ForecastContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      weather: {},
      city: this.props.routeParams.city
    }
  },
  componentDidMount () {
    this.fetchWeather(this.props.routeParams.city)
  },
  componentWillReceiveProps (newProps) {
    if (this.props.routeParams.city !== newProps.routeParams.city) {
      this.setState({
        isLoading: true,
        weather: {},
        city: newProps.routeParams.city
      })
      this.fetchWeather(newProps.routeParams.city)
    }
  },
  fetchWeather (city) {
    WeatherHelper.getForecast(city)
      .then((weather) => {
        this.setState({
          isLoading: false,
          weather: weather,
          city: weather.data.city.name + ', ' + weather.data.city.country
        })
      })
  },
  render () {
    return (
      <Forecast city={this.state.city} isLoading={this.state.isLoading} weather={this.state.weather} />
    )
  }
})

export default ForecastContainer
