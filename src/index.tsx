import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OktaProvider from './utils/OktaProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <OktaProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </OktaProvider>
);

reportWebVitals();
