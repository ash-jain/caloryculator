import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Dashboard from './dashboard.js';
import './css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    {/* TODO: Setup routing. */}
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
