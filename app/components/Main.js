import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Header from '../styled-components/Header'
import CityPickerContainer from '../containers/CityPickerContainer'
import styles from '../styles'

const fullHeight = {
  height: '100%'
}
const noMargin = {
  margin: 0
}

const Main = (props) => {
  return (
    <div className="main-container" style={fullHeight}>
      <Header className="header">
        <Link to='/' style={{decoration: 'none', color: 'white'}}>
          <h2 style={Object.assign({}, styles.thinFont, noMargin)}>Weather App</h2>
        </Link>
        <CityPickerContainer placeholder='Singapore' btnText='Get Weather' style={styles.flexRow} />
      </Header>
      <div className="main" style={fullHeight}>
        {props.children}
      </div>
    </div>
  )
}

export default Main
