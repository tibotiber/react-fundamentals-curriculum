import React, { PropTypes } from 'react'
import DayWeather from '../components/DayWeather'

const DayWeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleDaySelected (e) {
    this.context.router.push({
      pathname: '/details/' + this.props.requestedCity,
      state: {
        forecast: this.props.forecast,
        city: this.props.city
      }
    })
  },
  render () {
    return (
      <DayWeather forecast={this.props.forecast} onDaySelected={this.handleDaySelected} />
    )
  }
})

export default DayWeatherContainer
