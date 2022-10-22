import React from 'react';
import ReactDOM from 'react-dom/client';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import App from './App';
import '../node_modules/@spectrum-css/vars/dist/spectrum-global.css';
import '../node_modules/@spectrum-css/vars/dist/spectrum-light.css';
import '../node_modules/@spectrum-css/page/dist/index-vars.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider theme={defaultTheme} colorScheme="light">
    <App />
  </Provider>
);
