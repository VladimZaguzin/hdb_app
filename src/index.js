import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './App'

import ReconciliationForms from './pages/ReconciliationForms'
import Home from './pages/Home'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path ="/" component={App}>
      <IndexRoute component={Home} />
      <Route exact path='/ReconciliationForms' component={ReconciliationForms} />

    </Route>

  </Router>, document.getElementById('root'))
