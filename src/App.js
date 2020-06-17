import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';
import './App.css';
import '../src/assets/css/style.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
