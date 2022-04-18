import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar.js';
import Statistics from './components/statistics.js';
import Schedule from './components/schedule.js';
import Suggestions from './components/suggestions.js';
import './css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className='dashboard'>
      <Statistics />
      <Schedule />
      <Suggestions />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
