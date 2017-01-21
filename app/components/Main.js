import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Header from '../styled-components/Header'
import CityPickerContainer from '../containers/CityPickerContainer'
import styles from '../styles'

const noMargin = {
  margin: 0
}

const Main = (props) => {
  return (
    <div className="main-container" style={{height: '91%'}}>
      <Header className="header">
        <Link to='/' style={{decoration: 'none', color: 'white'}}>
          <h2 style={Object.assign({}, styles.thinFont, noMargin)}>Weather App</h2>
        </Link>
        <CityPickerContainer placeholder='Singapore' btnText='Get Weather' style={styles.flexRow} />
      </Header>
      <div className="main" style={{height: '100%'}}>
        {props.children}
      </div>
    </div>
  )
}

export default Main
