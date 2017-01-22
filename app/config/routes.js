import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import ForecastContainer from '../containers/ForecastContainer'
import DayDetails from '../components/DayDetails'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='details/:city' component={DayDetails} />
    </Route>
  </Router>
)

export default routes
