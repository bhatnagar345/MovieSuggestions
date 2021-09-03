import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <>
  <BrowserRouter>
  <App1/>
  </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);

