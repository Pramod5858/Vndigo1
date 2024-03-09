import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Route from './Route';
//import Parent from './Component/parent';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <App /> 
    {/* <Route /> */}
    {/* <Parent /> */}

  </React.StrictMode>
);

reportWebVitals();
