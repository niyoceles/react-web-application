import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import { Routes } from './Routes';

export class App extends React.Component
{
  	render() {
  		return (
    		<Provider store={store}>
      			<Routes />
    		</Provider>
  		);
  	}
}