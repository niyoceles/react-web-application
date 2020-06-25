import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ForgotPasswordScreen, ResetPasswordScreen, DashboardScreen, CategoryScreen } from './screens';
import ArticlesScreen from './screens/article/index';
import SetPasswordScreen from './screens/auth/password/set'
import LoginScreen from './screens/auth/LoginScreen';
import Home from './pages/Home.jsx';
import CreateArticle from './components/Articles/CreateArticle';
import ManageUsersPage from './pages/ManageUsersPage';
export class Routes extends Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Fragment>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/users' component={ManageUsersPage} />
                        <Route exact path='/password/forgot' component={ForgotPasswordScreen} />
                        <Route exact path='/password/reset/:hash' component={ResetPasswordScreen} />
                        <Route exact path='/password/set/' component={SetPasswordScreen} />
                        <Route exact path='/dashboard' component={DashboardScreen} />
                        <Route exact path='/articles' component={ArticlesScreen} />
                        <Route exact path='/articles/create' component={CreateArticle} />
                        <Route exact path='/category' component={CategoryScreen} />
                    </Fragment>
                </Switch>
            </Router>
        );
    }
}
