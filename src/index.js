import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <App isInitiallyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
