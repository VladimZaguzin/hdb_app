import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRouter, hashHistory} from 'react-router'

import App from './components/app';

import ReconciliationForms from './pages/ReconciliationForms';
import Home from './pages/Home';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path ="/" component={App}>

            <IndexRouter component={Home}></IndexRouter>
            <Route path="ReconciliationForms" component={ReconciliationForms}/>
        
        </Route>
    </Router>, document.getElementById('root'));

    
 