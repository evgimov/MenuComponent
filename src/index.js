import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';
import Page from './components/Page';

const  routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/:id' component={Page}/>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
