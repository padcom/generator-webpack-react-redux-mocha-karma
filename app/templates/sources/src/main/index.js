import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import application store
import { store } from './store';

// Import main application component
import App from './components/App';

// Render the application's root component to DOM element
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
