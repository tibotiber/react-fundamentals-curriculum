import React, { PropTypes } from 'react'
import styles from '../styles'
import CityName from '../styled-components/CityName'
import Puke from '../utils/Puke'

const ForecastWrapper = (props) => {
  return (
    <div style={Object.assign({}, styles.flexColumn)}>
      {props.children}
    </div>
  )
}

const Forecast = (props) => {
  if (props.isLoading) {
    return (
      <ForecastWrapper>
        <h1 style={Object.assign({}, styles.thinFont)}>Loading weather for <CityName>{props.city}</CityName>...</h1>
      </ForecastWrapper>
    )
  }

  return (
    <ForecastWrapper>
      <h1 style={Object.assign({}, styles.thinFont)}><CityName>{props.city}</CityName></h1>
      <Puke data={props.weather} />
    </ForecastWrapper>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired
}

export default Forecast
