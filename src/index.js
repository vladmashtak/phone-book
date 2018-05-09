import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.component';
import { storage } from './storage/storage'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
  <Provider store={storage}>
    <App />
  </Provider>
), document.getElementById('root'));
