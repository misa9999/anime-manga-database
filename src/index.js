import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.css'
import Root from './pages/Root';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Root />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
