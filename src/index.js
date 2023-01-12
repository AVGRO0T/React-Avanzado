import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/app';


import { Provider } from 'react-redux';
import configureStore from './store';

const accessToken = storage.get('auth');
configureClient({ accessToken });
const storehead = configureStore({ auth: !!accessToken });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storehead}>
    <Router>   
        <App />
    </Router>
    </Provider>
  </React.StrictMode>,
);
