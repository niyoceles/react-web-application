import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	ForgotPasswordScreen,
	ResetPasswordScreen,
	DashboardScreen,
	CategoryScreen,
} from './screens';
import LandingPageScreen from './screens/home/LandingPage';
import ManageArticlesScreen from './screens/article/ManageArticles';
import ManageCommentsScreen from './screens/comment/ManageComments';
import ReadArticleScreen from './screens/article/ReadArticle';
import SetPasswordScreen from './screens/auth/password/set';
import LoginScreen from './screens/auth/LoginScreen';
import Home from './pages/Home.jsx';
import CreateArticle from './components/Articles/CreateArticle';
import ManageUsersPage from './pages/ManageUsersPage';

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Fragment>
						<Route exact path='/' component={LandingPageScreen} />
						<Route exact path='/article/:id' component={ReadArticleScreen} />
						<Route exact path='/login' component={LoginScreen} />
						<Route exact path='/users' component={ManageUsersPage} />
						<Route
							exact
							path='/password/forgot'
							component={ForgotPasswordScreen}
						/>
						<Route
							exact
							path='/password/reset/:hash'
							component={ResetPasswordScreen}
						/>
						<Route exact path='/password/set/' component={SetPasswordScreen} />
						<Route exact path='/dashboard' component={DashboardScreen} />
						<Route exact path='/category' component={CategoryScreen} />
						<Route exact path='/articles' component={ManageArticlesScreen} />
						<Route exact path='/comments' component={ManageCommentsScreen} />
						<Route exact path='/articles/create' component={CreateArticle} />
					</Fragment>
				</Switch>
			</Router>
		);
	}
}
