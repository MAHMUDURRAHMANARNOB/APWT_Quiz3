import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './common/Header';
import Footer from './common/Footer';
import Home from './components/Home';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
