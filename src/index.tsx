import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './utils/theme';
import OktaProvider from './providers/OktaProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <OktaProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </OktaProvider>
);

reportWebVitals();
