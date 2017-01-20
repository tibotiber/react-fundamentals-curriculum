import React, { PropTypes } from 'react'
import styles from '../styles'
import CityPickerContainer from '../containers/CityPickerContainer'

const patternedBackground = {
  backgroundSize: 'cover',
  backgroundImage: 'url(app/images/pattern.svg)',
  height: '100%',
  width: '100%'
}

const Home = (props) => {
  return (
    <div style={Object.assign({}, patternedBackground, styles.flexColumn)}>
      <h1 style={Object.assign({}, styles.thinFont, styles.white)}>Choose a city</h1>
    <CityPickerContainer placeholder='Singapore' btnText='Get Weather' style={styles.flexColumn} />
    </div>
  )
}

export default Home
