import React, { PropTypes } from 'react'
import CityPicker from '../components/CityPicker'

const CityPickerContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      city: ''
    };
  },
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    });
  },
  handleCitySelected (e) {
    this.context.router.push('/forecast/' + this.state.city);
    this.setState({
      city: ''
    })
  },
  render () {
    return (
      <CityPicker
        placeholder={this.props.placeholder}
        btnText={this.props.btnText}
        style={this.props.style}
        onCitySelected={this.handleCitySelected}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
})

export default CityPickerContainer
