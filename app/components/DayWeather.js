import React, { PropTypes } from 'react'
import Puke from '../utils/Puke'
import moment from 'moment'
import styles from '../styles'

const DayWeather = (props) => {
  return (
    <div style={{
        margin: '20px',
        width: '300px',
        textAlign: 'center'
      }}>
      {props.onDaySelected
        ? <a onClick={props.onDaySelected} style={{cursor: 'pointer'}}><img style={{width: '50%'}} src={'app/images/weather-icons/' + props.forecast.icon + '.svg'} /></a>
        : <img style={{width: '50%'}} src={'app/images/weather-icons/' + props.forecast.icon + '.svg'} />
      }
      <h2 style={styles.thinFont}>{moment(props.forecast.timestamp).format('dddd, MMM Do')}</h2>
    </div>
  )
}

DayWeather.propTypes = {
  forecast: PropTypes.object.isRequired,
  onDaySelected: PropTypes.func
}

export default DayWeather
