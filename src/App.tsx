import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Routes from './pages/Routes';
import ReactI18nProvider from './providers/ReactI18nProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ReactI18nProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ReactI18nProvider>
    </Provider>
  );
};

export default App;
