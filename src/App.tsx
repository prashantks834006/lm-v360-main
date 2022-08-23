import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Routes from './pages/Routes';
import OktaProvider from './utils/OktaProvider';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <OktaProvider>
          <Routes />
        </OktaProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
