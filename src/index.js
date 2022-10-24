import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from "react-router-dom";
import { RoomProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <Router>
      <App />
   </Router>
  </RoomProvider>
);


reportWebVitals();
