import React, { PropTypes } from 'react'

const Forecast = (props) => {
  return (
    <div>city: {props.city}</div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired
}

export default Forecast
