import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { configureClient } from './api/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.render(
  <React.StrictMode>
    <App isInitiallyLogged={!!accessToken} />
  </React.StrictMode>,
  document.getElementById('root'),
);
