import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home.jsx';
import SendInvitePage from './pages/SendInvitePage';

const Routes = () => (
  <Router>
    <Switch>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/send-invitation' component={SendInvitePage} />
      </Fragment>
    </Switch>
  </Router>
);

export default Routes;
