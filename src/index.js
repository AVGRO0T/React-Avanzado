import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/app';

import Root from './root';

import configureStore from './store';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);
const storehead = configureStore({ auth: !!accessToken }, { router });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Root store={storehead} router={router} />
);
