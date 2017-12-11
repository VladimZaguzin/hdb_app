import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App'
import LoginPage from './pages/login'
import ReconciliationForms from './pages/ReconciliationForms'
import Home from './pages/Home'



require('./index.css'); // add `link`




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path ="/" component={App}>
      <IndexRoute component={LoginPage} />
      <Route exact path='/LoginPage' component={LoginPage} />
      <Route exact path='/App' component={App} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/ReconciliationForms' component={ReconciliationForms} />

    </Route>

  </Router>, document.getElementById('root'))
