import React, { PropTypes } from 'react'
import Forecast from '../components/Forecast'

const ForecastContainer = React.createClass({
  render () {
    return (
      <Forecast city={this.props.routeParams.city} />
    )
  }
})

export default ForecastContainer
