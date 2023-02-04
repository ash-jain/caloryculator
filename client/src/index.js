import React from 'react';
import { createRoot } from 'react-dom/client';

import Navbar from './components/navbar';
import Dashboard from './dashboard.js';

import './css/global.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    {/* TODO: Setup routing. */}
    <Dashboard />
  </React.StrictMode>
);
