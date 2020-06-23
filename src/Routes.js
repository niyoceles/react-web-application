import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ForgotPasswordScreen, ResetPasswordScreen, SetPasswordScreen, DashboardScreen, CategoryScreen } from './screens';
import ArticlesScreen from './screens/article/index';
import LoginScreen from './screens/auth/LoginScreen';
import Home from './pages/Home.jsx';
import CreateArticle from './components/Articles/CreateArticle';
export class Routes extends React.Component
{
    render() {
        return (
            <Router>
                <Switch>
                    <Fragment>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/password/forgot' component={ForgotPasswordScreen} />
                        <Route exact path='/password/reset/:hash' component={ResetPasswordScreen} />
                        <Route exact path='/password/set/:hash' component={SetPasswordScreen} />
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
