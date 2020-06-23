import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginScreen, ForgotPasswordScreen, ResetPasswordScreen, SetPasswordScreen, DashboardScreen, ArticleScreen, CategoryScreen } from './screens';

export class Routes extends React.Component
{
    render() {
        return (
            <Router>
                <Switch>
                    <Fragment>
                            <Route exact path='/login' component={LoginScreen} />
                            <Route exact path='/password/forgot' component={ForgotPasswordScreen} />
                            <Route exact path='/password/reset/:hash' component={ResetPasswordScreen} />
                            <Route exact path='/password/set/:hash' component={SetPasswordScreen} />

                            <Route exact path='/dashboard' component={DashboardScreen} />

                            <Route exact path='/article' component={ArticleScreen} />

                            <Route exact path='/category' component={CategoryScreen} />
                    </Fragment>
                </Switch>
            </Router>
        );
    }
}
