import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home.jsx';

const Routes = () => (
  <Router>
    <Switch>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
      </Fragment>
    </Switch>
  </Router>
);

export default Routes;
