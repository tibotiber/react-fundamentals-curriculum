import React, { PropTypes } from 'react'
import styles from '../styles'

const CityPicker = (props) => {
  return (
    <div style={props.style}>
      <input
        className='form-control'
        placeholder={props.placeholder}
        style={{maxWidth: '300px'}}
        onChange={props.onUpdateCity}
        value={props.city} />
      <button
        className='btn btn-success'
        style={{margin: '10px'}}
        onClick={props.onCitySelected}>
          {props.btnText}
      </button>
    </div>
  )
}

CityPicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onCitySelected: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string
}

export default CityPicker
