import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pfmw7rjo.us.auth0.com"
      clientId="tZqIGpZMDQ1rF59gqvTvahityQNaGfZX"
      redirectUri={window.location.origin + '/react-auth0/profile'}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);