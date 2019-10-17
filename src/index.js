import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Importing Provider for Redux
import { Provider } from 'react-redux'

// Importing the store to be passed into Provider
import store from './store.js'

ReactDOM.render(
  // Wrapped <App /> component in <Provider> with prop of store passed in to allow access to the store within the App
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
