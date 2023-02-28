import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Test  from './Test';
// import { NoPage } from './NoPage';
// import Home  from './Home';
// import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
      <App/>
  </React.StrictMode>
  
);

reportWebVitals();
