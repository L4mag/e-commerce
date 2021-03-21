import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'materialize-css/dist/css/materialize.min.css'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
