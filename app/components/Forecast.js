import React, { PropTypes } from 'react'
import styles from '../styles'
import CityName from '../styled-components/CityName'
import DayWeatherContainer from '../containers/DayWeatherContainer'

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
        <h1 style={Object.assign({}, styles.thinFont)}>Loading weather forecast for <CityName>{props.city}</CityName>...</h1>
      </ForecastWrapper>
    )
  }

  return (
    <ForecastWrapper>
      <h1 style={styles.thinFont}><CityName>{props.city}</CityName></h1>
      <h2 style={styles.thinFont}>Select a day to get detailed forecast</h2>
      <div style={Object.assign({}, styles.flexRow, {flexWrap: 'wrap', justifyContent: 'space-between'})}>
        {props.forecast.map((day) => {
          return <DayWeatherContainer key={day.timestamp} forecast={day} requestedCity={props.requestedCity} city={props.city}/>
        })}
      </div>
    </ForecastWrapper>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  requestedCity: PropTypes.string.isRequired
}

export default Forecast
