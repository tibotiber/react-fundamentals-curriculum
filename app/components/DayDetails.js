import React, { PropTypes } from 'react'
import DayWeather from '../components/DayWeather'
import styles from '../styles'

const DayDetails = (props) => {
  console.log(props.location.state.forecast);
  return (
    <div style={Object.assign({}, styles.flexColumn, styles.thinFont, {fontSize: '32px'})}>
      <DayWeather forecast={props.location.state.forecast} />
        <p>{props.location.state.city}</p>
        <p>{props.location.state.forecast.description}</p>
        <p>Min Temp: {props.location.state.forecast.minTemperature}&deg;C</p>
        <p>Max Temp: {props.location.state.forecast.maxTemperature}&deg;C</p>
        <p>Humidity: {props.location.state.forecast.humidity}</p>
    </div>
  )
}

export default DayDetails
