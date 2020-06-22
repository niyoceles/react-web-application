import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home.jsx';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import CreateArticlePage from './pages/CreateArticlePage';
import UpdateArticlePage from './pages/UpdateArticlePage';
import ManageArticlesPage from './pages/ManageArticlesPage';
import ManageUsersPage from './pages/ManageUsersPage';
import CreatePasswordPage from './pages/CreatePasswordPage';


const Routes = () => (
  <Router>
    <Switch>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/forget' component={ForgetPasswordPage} />
        <Route exact path='/reset-password' component={ResetPasswordPage} />
        <Route exact path='/create' component={CreateArticlePage} />
        <Route exact path='/update' component={UpdateArticlePage} />
        <Route exact path='/users' component={ManageUsersPage} />
        <Route exact path='/articles' component={ManageArticlesPage} />
        <Route exact path='/create-account' component={CreatePasswordPage} />
      </Fragment>
    </Switch>
  </Router>
);

export default Routes;
