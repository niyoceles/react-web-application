import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home.jsx';
import SendInvitePage from './pages/SendInvitePage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

const Routes = () => (
  <Router>
    <Switch>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/send-invitation' component={SendInvitePage} />
        <Route exact path='/forget' component={ForgetPasswordPage} />
        <Route exact path='/reset-password' component={ResetPasswordPage} />
      </Fragment>
    </Switch>
  </Router>
);

export default Routes;
