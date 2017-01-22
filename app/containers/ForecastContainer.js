import React, { PropTypes } from 'react'
import Forecast from '../components/Forecast'
import WeatherHelper from '../utils/WeatherHelper'

const ForecastContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      forecast: [],
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
        forecast: [],
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
          forecast: weather.forecast,
          city: weather.city.name + ', ' + weather.city.country
        })
      })
  },
  render () {
    return (
      <Forecast requestedCity={this.props.routeParams.city} city={this.state.city} isLoading={this.state.isLoading} forecast={this.state.forecast} />
    )
  }
})

export default ForecastContainer
